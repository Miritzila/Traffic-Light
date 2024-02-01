// Home.js
import React, { useState } from "react";
import TrafficLight from "./TrafficLight";
import ToggleButton from "./ToggleButton";

const Home = () => {
  const [currentColor, setCurrentColor] = useState("red");

  return (
    <div className="text-center">
      <h1>El semáforo</h1>
      <div id="trafficTop"></div>
      <TrafficLight currentColor={currentColor} changeCurrentColor={setCurrentColor} />
      <br></br>
      <ToggleButton currentColor={currentColor} changeCurrentColor={setCurrentColor} />
      <br></br>
    </div>
  );
};

export default Home;
