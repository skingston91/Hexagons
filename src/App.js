import React, { Component } from "react";
import Hexagon from "./components/Hexagon";

import "./App.scss";

const hexes = [
  { type: "Book", colour: "red" },
  { type: "Online Course", colour: "green" },
  { type: "Article", colour: "blue" },
  { type: "Mentor", colour: "yellow" },
  { type: "Course", colour: "pink" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Hexgrid">
          {hexes.map(hex => (
            <Hexagon colour={hex.colour} text={hex.type} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
