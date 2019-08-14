import React, { Component } from "react";
import NewTask from './Components/NextTask'
import List from './Components/List'
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      task: "",
      list: []
    }
  }

  handleChange = (value)=>{
    this.setState({
      task: value
    })
  }
  handleClick = ()=>{
    this.setState({
      list: [...this.state.list,this.state.task]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <NewTask handleChange={this.handleChange} handleClick={this.handleClick}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
