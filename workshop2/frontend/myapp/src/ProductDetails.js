import axios from "axios";
import React from "react";
import  Review from "./Review.js";
import CreateReview from "./CreateReview.js";

export default class ProductDetails extends React.Component{
    state = {
        product : {
            name : "",
            price :0,
            brand :"",
            model: "",
            year:"",
            review:[]
        },
        id : this.props.match.params.id
         
    }
   
componentDidMount(){
    console.log(this.props.match)
    axios.get('/products/'+this.state.id+'/details',{
        headers :{
            Authorization : localStorage.getItem('token')
        }
    })
    .then((response) =>{
        let copy = {...this.state}
        copy.product = response.data
        console.log(response.data)
        this.setState(copy)

    })
}
addReviewClicked = ()=>{
    console.log("addreview")
    this.props.history.push('/product/review')
}
updateReviewBtnClicked=(pId, rId)=>{
    
    this.props.history.push('/products/'+pId+'/review/'+rId)
    
}
deleteReviewBtnClicked(pId, rId){
    axios.delete('/products/'+pId+'/review/'+rId, {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then(response =>{
        console.log(response.data)
        axios.get('/products/'+this.state.id+'/details',{
            headers :{
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response) =>{
            let copy = {...this.state}
            copy.product = response.data
            console.log(response.data)
            this.setState(copy)
    
        })
        
    })

}


    render(){
        return(
            <div>
                <h3>Product Detail</h3>
                <p>{this.state.product.name}</p>
                <p>{this.state.product.price}</p>
                <p>{this.state.product.brand}</p>
                <p>{this.state.product.model}</p>
                <p>{this.state.product.year}</p>
                <hr/>
                <div><h3>Review</h3></div>
                <div>
                    {
                    this.state.product.review.map(item =>{
                        return(
                            <Review
                            title = {item.title}
                            description ={item.description}
                            updateReviewBtnClicked={() =>{this.updateReviewBtnClicked(this.state.id, item.rId)}}
                            deleteReviewBtnClicked ={() => {this.deleteReviewBtnClicked(this.state.id, item.rId)}}
                            ></Review>
                        )

                    })
                }
                </div>
                <CreateReview
                id = {this.state.id}
                ></CreateReview>
            
            {/* <button onClick ={this.updateReviewClicked}>Update</button>
            <button onClick ={this.deleteReviewBtnClicked}>Delete</button> */}
               
            </div>
        )
    }
}
