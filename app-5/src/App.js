import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Image url="https://media-cdn.tripadvisor.com/media/photo-s/0b/4f/52/63/happy-giraffe.jpg"/>
      </div>
    );
  }
}
export default App;
