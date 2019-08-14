import React, {Component} from 'react'
export default class List extends Component{

    render(){
        return(
            <div>
                {this.props.list.map((task)=>{
                    return <h2>{task}</h2>
                })}
            </div>
        )
    }
}