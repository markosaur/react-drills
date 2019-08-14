import React, {Component} from 'react'
export default class NewTask extends Component{


    render(){
        return(
            <div>
                <input onChange={(event)=>{this.props.handleChange(event.target.value)}}></input>
                <button onClick={this.props.handleClick}>Add Task</button>
            </div>    
        )
    }
}