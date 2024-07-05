import './button.css';
import React from 'react';

const CustomButton = ({ type, startIcon, text }) => {
  return (
    <button
      className='custom-button' 
      type={type}
    >
      <div className="button-content">
        {startIcon && <span className="button-icon">{startIcon}</span>}
        {text}
      </div>
    </button>
  );
};

export default CustomButton;



