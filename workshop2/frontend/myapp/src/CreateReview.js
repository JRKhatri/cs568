import axios from "axios";
import React from "react";

export default class CreateReview extends React.Component{
    state = {
        review : {
            rId:0,
            title:"",
            description:""
        }, 
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.review }
        copy[event.target.name] = event.target.value;
        this.setState({ review: copy })
    }

   

    createButtonClicled(id) {
        console.log(id)
        console.log(this.state.review)
        axios.post('/products/'+id+'/addReviews', this.state.review, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
        }).then(response => {
            console.log(response.data)
            
        })

    }
    updateReviewBtnClicled(id){
        this.props.history.push('/update-review/'+id)

    }

    render(){
         
        return(
            <div>
                <h3>Create Review</h3>
                Id :<input type = "number" value ={this.state.review.rId} name = "rId" onChange={(event) => {this.propertyChanged(event)}}/>
                title :<input type="text" value={this.state.review.title} name="title" onChange={(event) => { this.propertyChanged(event) }} />
                description :<input type="text" value={this.state.review.description} name="description" onChange={(event) => { this.propertyChanged(event) }} />
                
                
                <button onClick={()=>{this.createButtonClicled(this.props.id)}} >Apply</button>
                <div>
                

                </div>
            </div>

        )
    }
}