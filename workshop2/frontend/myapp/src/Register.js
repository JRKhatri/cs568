import React from "react";
import axios from 'axios'

export default class Register extends React.Component {
    state = {
        user:{
        username: "",
        password: "",
        email: ""
    },
    message:""
        
    }

    propertyChanged =(event)=>{
        let copy ={...this.state.user}
        copy[event.target.name] = event.target.value;
        this.setState({user : copy})

    }
    
    handleRegisterFormSubmit =(event)=>{
        event.preventDefault();
        if(this.state.user.username.length < 3 || this.state.user.password.length < 3 ){
            console.log("jhi")
            let copy = {...this.state.message}
            copy = 'username or password too short'
            this.setState({message : copy})
        }else{

        axios.post('/users', this.state.user)
        .then(response => {
            console.log(response.data)
    
        })
    }

    }

    render() {
        return (
            <div>
                <div>Sign Up</div>
                <span>{this.state.message}</span>
                <form onSubmit = {(event) =>{this.handleRegisterFormSubmit(event)}} >
                User Name :<input type="text" value={this.state.username} name="username" onChange={(event) => { this.propertyChanged(event) }} />
                Password :<input type="password" value={this.state.password} name="password" onChange={(event) => { this.propertyChanged(event) }} />
                Email :<input type="text" value={this.state.email} name="email" onChange={(event) => { this.propertyChanged(event) }} />
                <input type='submit' value ='submit'/>
                </form>

            </div>
        )
    }
}
