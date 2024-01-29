// Home.js
import React from "react";
import TrafficLight from "../TrafficLight";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Traffic Light</h1>
	  <div id="trafficTop"></div>
      <TrafficLight />
    </div>
  );
};

export default Home;
