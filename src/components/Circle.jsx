import React from "react";
import "../styles.scss";

export default function Frame({ color, isOn = false }) {
  return (
    <div
      className="circle"
      style={{ backgroundColor: isOn ? color : "white" }}
    ></div>
  );
}
