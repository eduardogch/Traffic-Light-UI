import React, { useState } from "react";
import Frame from "./Frame";
import { fetchLight, fetchRandomLight } from "../fetchLight";
import "../styles.scss";

export default function App() {
  const [light, setlight] = useState("");
  const [activateFrame, setActivateFrame] = useState(true);
  const [mode, setMode] = useState("normal");

  const handleChange = (event) => {
    if (event?.target?.value) {
      setMode(event?.target?.value);
    }
  };

  const handleOnClickFrame = async (event) => {
    event.persist();
    if (activateFrame) {
      let color = await fetchRandomLight();
      setlight(color);
      setActivateFrame(false);
    }
  };

  const handleOnClickButton = async (event) => {
    event.persist();
    let color = "red";
    if (mode === "random") {
      // Guaranteed random color
      while (color === light) {
        color = await fetchRandomLight(light);
      }
    } else {
      color = await fetchLight(light);
    }
    setlight(color);
  };

  return (
    <div className="container">
      <h1>Traffic Light UI</h1>
      <Frame light={light} onClick={handleOnClickFrame} />
      <button className="button" onClick={handleOnClickButton}>
        Changed!
      </button>
      <label>
        <input
          type="radio"
          value="normal"
          checked={mode === "normal"}
          onChange={handleChange}
        />
        Normal Mode
        <input
          type="radio"
          value="random"
          checked={mode === "random"}
          onChange={handleChange}
        />
        Random Mode
      </label>
    </div>
  );
}
