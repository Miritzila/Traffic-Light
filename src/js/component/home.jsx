// Home.js
import React from "react";
import TrafficLight from "../TrafficLight";
import ToggleButton from "../ToggleButton";
import PurpleButton from "../PurpleButton";

const Home = () => {
    
  return (
    <div className="text-center">
      <h1>El semáforo</h1>
	  <div id="trafficTop"></div>
      <TrafficLight />
	  <br></br>
	  <ToggleButton />
    <br></br>
    <br></br>
    <PurpleButton />
    </div>
  );
};

export default Home;
