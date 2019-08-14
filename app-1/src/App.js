import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }

  writing(val){
    this.setState({ userInput: val });
  }

  // magicWords(userInput){
  //   return this.state.userInput
  // }

  render() {
    return (
      <div>
          <input onChange = {(event)=> this.writing(event.target.value) }></input>
          <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
