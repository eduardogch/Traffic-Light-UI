import React from "react";
import Circle from "./Circle";
import "../styles.scss";

export default function Frame({ light, onClick }) {
  return (
    <div className="frame" onClick={onClick}>
      <Circle color="red" isOn={light === "red"} />
      <Circle color="yellow" isOn={light === "yellow"} />
      <Circle color="green" isOn={light === "green"} />
    </div>
  );
}
