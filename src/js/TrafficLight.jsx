// TrafficLight.js
import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const colors = ["red", "yellow", "green"];
    colors.forEach(c => {
      const lightElement = document.getElementById(`${c}Light`);
      if (lightElement) {
        if (c === color) {
          lightElement.classList.add("active");
        } else {
          lightElement.classList.remove("active");
        }
      }
    });
  }, [color]);

  const handleClick = (colorDiv) => {
    setColor(colorDiv);
  };

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div id="container">
      <div id="redLight" onClick={() => handleClick("red")}></div>
      <div id="yellowLight" onClick={() => handleClick("yellow")}></div>
      <div id="greenLight" onClick={() => handleClick("green")}></div>
    </div>
  );
};

export default TrafficLight;