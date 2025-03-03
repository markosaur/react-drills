import React, { Component } from "react";
import Todo from "./Todo"
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      input: "",
      list: []
      };
    }

  handleInputChange = (value) =>{
    this.setState({input: value})
  }

  handleInputTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input]
    });
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do List</h1>
        <div>
          <input 
          value={this.state.input}
          placeholder="Enter new task"
          onChange={(e) => this.handleInputChange(e.target.value)}
          />
          <button onClick = {this.handleInputTask}>Add</button>
        </div>
        <br/>
        {list}
      </div>
    );
  }
}

export default App;
