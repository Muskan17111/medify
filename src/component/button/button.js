import React from 'react';
import './button.css';

const CustomButton = ({ text }) => {
  return (
    <button className='custom-button'>
      {text}
    </button>
  );
};

export default CustomButton;


