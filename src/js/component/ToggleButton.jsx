import React from 'react';


const ToggleButton = ({ currentColor, changeCurrentColor }) => {

  const toggleColor = (event) => {
    if (currentColor === "red") {
      changeCurrentColor("yellow");
    } else if (currentColor === "yellow") {
      changeCurrentColor("green")
    } else if (currentColor === "green") {
      changeCurrentColor("red");
    }
  }

  return (
    <button className="btn btn-purple" onClick={toggleColor}>Cambiar Color</button> // Botón para alternar el color secuencialmente
  );
};

export default ToggleButton;
