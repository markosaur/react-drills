import React, {Component} from "react";

class Todo extends Component{
    render(){
        console.log("hello world")
        return(
            <p>{this.props.task}</p>
        )
    }
}

export default Todo;

