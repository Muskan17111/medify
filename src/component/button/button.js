// import React from 'react';
import './button.css';


// const CustomButton = ({  type, variant, size, startIcon, text, }) => {
//   return (
//     <button className='custom-button'       type={type}
//     variant={variant}
//     size={size}
//     startIcon={startIcon}>
//       {text}
//     </button>
//   );
// };

// export default CustomButton;

// // CustomButton.js
import React from 'react';


const CustomButton = ({ type, variant, size, startIcon, text }) => {
  return (
    <button
      className='custom-button' 
      type={type}
      variant={variant}
      size={size}
      startIcon={startIcon} 
    >
   <div sx={{ display: 'flex', alignItems: 'center' }}>
        {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
        {text}
      </div>
    </button>
  );
};

export default CustomButton;



