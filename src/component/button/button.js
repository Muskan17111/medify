// import './button.css';
// import React from 'react';


// const CustomButton = ({ type, variant, size, startIcon, text }) => {
//   return (
//     <button
//       className='custom-button' 
//       type={type}
//       variant={variant}
//       size={size}
//       startIcon={startIcon} 
//     >
//    <div sx={{ display: 'flex', alignItems: 'center' }}>
//         {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
//         {text}
//       </div>
//     </button>
//   );
// };

// export default CustomButton;

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



