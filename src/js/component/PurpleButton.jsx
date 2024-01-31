import React from 'react';

const PurpleButton = ({ setPurple }) => {
  
  return (
    <button class="btn btn-purple" onClick={setPurple}>Añadir purpura</button>
  );
};

export default PurpleButton;
