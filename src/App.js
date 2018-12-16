import React, { Component } from "react";
import Hexagon from "./components/Hexagon";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexes: [
        { type: "Book", colour: "red", active: false },
        { type: "Online Course", colour: "green", active: false },
        { type: "Article", colour: "blue", active: false },
        { type: "Mentor", colour: "orange", active: false },
        { type: "Course", colour: "pink", active: false },
        { type: "Book", colour: "red", active: false },
        { type: "Online Course", colour: "green", active: false },
        { type: "Article", colour: "blue", active: false },
        { type: "Mentor", colour: "orange", active: false },
        { type: "Course", colour: "pink", active: false }
      ]
    };
  }

  handleHexClick = type => {
    const { hexes } = this.state;
    const newHexes = hexes.map(hex => {
      if (hex.type === type) {
        hex.active = true;
      }
      return hex;
    });
    this.setState({ hexes: newHexes });
  };

  render() {
    const { hexes } = this.state;
    return (
      <div className="App">
        <div className="Hexgrid">
          {hexes.map((hex, index) => (
            <Hexagon
              key={index}
              colour={hex.colour}
              text={hex.type}
              active={hex.active}
              handleClick={this.handleHexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
