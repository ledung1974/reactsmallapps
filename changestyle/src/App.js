import React, { useState } from "react";
import Comp from "./Comp";
import StyledComp from "./StyledComp";
import "./App.css";

export default function App() {
  const [bgColor, setBgColor] = useState("blue");

  const handleClick = () => {
    setBgColor("red"); //blue --> red
  };

  const buttonstyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px"
  };

  return (
    <div className="App">
      <button style={buttonstyle} onClick={handleClick} type="button">
        Click here to change background
      </button>
      <Comp color={bgColor} />
      <StyledComp color={bgColor} />
    </div>
  );
}