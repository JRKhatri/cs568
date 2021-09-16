import React from "react";
import axios from 'axios'

export default class ReviewUpdate extends React.Component{
    state ={
        review :{
            title:"",
            description:"",
        },

        pId :this.props.match.params.pId,
        rId :this.props.match.params.rId
    }

    propertyChanged(event){
        let copy ={...this.state.review};
        copy[event.target.name] = event.target.value;
        this.setState({review : copy})
    }
    reviewUpdateSubmitBtnClicked(pId, rId){
        axios.post('/products/'+pId+'/reviews/'+rId, this.state.review, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response =>{
            console.log(response.data)
        })


    }

    render(){
    
        return(
            <div>
                <div>Update Review</div>
                Title: <input type ="text" value={this.state.review.title} name="title" onChange = {(event) => {this.propertyChanged(event)}}/>
                Description :<input type ="text" value={this.state.review.description} name="description" onChange = {(event) => {this.propertyChanged(event)}}/>
                <button onClick = {() =>{this.reviewUpdateSubmitBtnClicked(this.state.pId, this.state.rId)}}>Submit </button>
            </div>
        )
    }
}
