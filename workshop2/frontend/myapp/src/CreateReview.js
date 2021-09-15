import axios from "axios";
import React from "react";

export default class CreateReview extends React.Component{
    state = {
        review : {
            id:0,
            title:"",
            description:""
        }, 
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.review }
        copy[event.target.name] = event.target.value;
        this.setState({ review: copy })
    }

    // createReview() {
    //     axios.get('/products/' + this.props.match.params.id + '/reviews',this.state.review, {
    //         headers: {
    //             Authorization: localStorage.getItem('token')
    //         }
    //     })
    //         .then(response => {
    //             let copy = { ...this.state }
    //             copy.product = response.data
    //             this.setState(copy)

    //         })

    // }

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

    render(){
         
        return(
            <div>
                <h3>Create Review</h3>
                Id :<input type = "number" value ={this.state.review.id} name = "id" onChange={(event) => {this.propertyChanged(event)}}/>
                title :<input type="text" value={this.state.review.title} name="title" onChange={(event) => { this.propertyChanged(event) }} />
                description :<input type="text" value={this.state.review.description} name="description" onChange={(event) => { this.propertyChanged(event) }} />
                
                
                <button onClick={()=>{this.createButtonClicled(this.props.id)}} >Apply</button>
            </div>

        )
    }
}