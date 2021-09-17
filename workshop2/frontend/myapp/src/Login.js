import axios from "axios";
import React from "react";
import { MyContext } from "./App.js";

export default class Login extends React.Component {
    state = {
        user: {
            email: "",
            password: ""
        }
    }
   

    propertyChanged = (event) => {
        let copy = { ...this.state.user }
        copy[event.target.name] = event.target.value
        this.setState({ user: copy })
    }

    loginButtonClicled = (value) => {
        axios.post('/login', this.state.user)
            .then((response) => {
                if (response.data) {
                    //backend will send token and will store in localStorage of browser (response have data object which has token attribute and value)
                    localStorage.setItem('token', response.data.token);
                    console.log(value.login)
                    value.login()
                    console.log(response.data);
                    //this.props.history.push('/all-products')
                }

            })
    }

    render() {
        return (
            <div className="Login">
                <div><h3>Login</h3></div>
                Email :<input type="text" value={this.state.user.email} name="email" onChange={(event) => { this.propertyChanged(event) }} />
                Password :<input type="password" value={this.state.user.password} name="password" onChange={(event) => { this.propertyChanged(event) }} />
                
                <MyContext.Consumer>{

                    value =>(
                        <button onClick={() => {this.loginButtonClicled(value)}} >Login</button>
                    )
                    }
                    </MyContext.Consumer>
                
            </div>

        )
    }

}