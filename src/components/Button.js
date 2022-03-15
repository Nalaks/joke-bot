import React from 'react';

const Button = ({ handleEvent, disabled, text }) => {
  return (
    <button onClick={handleEvent} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
