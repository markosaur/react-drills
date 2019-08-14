import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
      
      this.state = {
        filterString: "",
        foods: ["lasagna", "carrot cake", "sushi", "cinnamon rolls", "watermelon"],
        displayed: ["lasagna", "carrot cake", "sushi", "cinnamon rolls", "watermelon"]
      };
      
  }

  search = (whatever)=>{
    const foods2 = this.state.foods.filter((food)=>{
      return food.startsWith(whatever)
    })

      this.setState({
        displayed: foods2
      })
  }  

  render() {
    return (
      
      <div className="App">
        <input onChange={(e)=>{this.search(e.target.value)}}></input>
        {this.state.displayed.map((element)=>{
          return <h2>{element}</h2>
        })}
      </div>
    );
  }
}

export default App;
