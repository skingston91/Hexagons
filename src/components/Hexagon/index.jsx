import React from "react";
import "./styles.scss";

const Hexagon = ({ colour, text }) => (
  <div className={`Hexagon Hexagon--${colour}`}>
    <p className="Hexagon__text">{text}</p>
  </div>
);

export default Hexagon;
