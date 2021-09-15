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
                {
                    this.state.product.review.map(item =>{
                        return(
                            <Review
                            title = {item.title}
                            description ={item.description}
                            ></Review>
                        )

                    })
                }
                <CreateReview
                id = {this.state.id}
                ></CreateReview>
            {/* <button onClick ={this.addReviewClicked}>Add Review</button> */}
            {/* <button onClick ={this.updateReviewClicked}>Update</button>
            <button onClick ={this.deleteReviewBtnClicked}>Delete</button> */}
               
            </div>
        )
    }
}
