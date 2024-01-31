import React from 'react';
import TrafficLight from './TrafficLight';
import Home from './component/home';

const ToggleButton = ({ toggleColor }) => {
  return (
    <button class="btn btn-purple" onClick={toggleColor}>Cambiar Color</button> // Botón para alternar el color secuencialmente
  );
};

export default ToggleButton;
