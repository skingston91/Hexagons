import React from "react";
import "./styles.scss";

const Hexagon = ({ colour, text, active = false, handleClick }) => (
  <div
    onClick={() => handleClick(text)}
    className={`Hexagon Hexagon--${colour}`}
  >
    <p className="Hexagon__text">{`${text} ${active ? "- active" : ""}`}</p>
  </div>
);

export default Hexagon;
