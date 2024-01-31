import React, { useState, useEffect } from "react";

const TrafficLight = ({ currentColor, changeCurrentColor }) => {

  useEffect(() => {
    const colors = ["red", "yellow", "green"];
    colors.forEach(c => {
      const lightElement = document.getElementById(`${c}Light`);
      if (lightElement) {
        if (c === currentColor) {
          lightElement.classList.add("active");
        } else {
          lightElement.classList.remove("active");
        }
      }
    });
  }, [currentColor]);

  const handleClick = (colorDiv) => {
    changeCurrentColor(colorDiv);
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