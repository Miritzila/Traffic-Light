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
  }, [color]); // Este efecto se ejecuta cada vez que 'color' cambia

  // Manejadores de eventos para cambiar el color
  const handleClick = (colorDiv) => {
    setColor(colorDiv);
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