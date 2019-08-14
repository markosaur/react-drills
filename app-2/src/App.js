import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  constructor(){
    super()
  
    this.state ={
      foods: ['Lasagna','Ice Cream','Jolley Ranchers','Carrot Cake', 'Grapes'],
    }
  }

  render() {
    return (
      <div className="App">
          {this.state.foods.map((element)=>{
            return <h2>{element}</h2>
          })}
      </div>
    );
  }
}

export default App;
