import React, { Component } from "react";
class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    updateUsername=(value)=>{
        this.setState({username: value})
    }
    updatePassword=(value)=>{
        this.setState({password: value})
    }
    updateLogin=()=>{
        alert(`username: ${this.state.username} password: ${this.state.password}`);
    }
    render(){
        return(
            <div >
                <input onChange ={(e) => this.updateUsername(e.target.value)} value={this.state.username}/>
                <input onChange ={(e) => this.updatePassword(e.target.value)} value ={this.state.password}/>
                <button onClick = {this.updateLogin}>Login</button>
            </div>
        )
    }
}

export default Login