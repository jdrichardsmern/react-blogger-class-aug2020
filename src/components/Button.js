import React from 'react';

const Button = ({ className, onClick, type, value, children }) => {
  return (
    <button
      type={type}
      className={className}
      style={{ margin: '10px 15px' }}
      onClick={onClick}
      value={value}
    >
      {value ? value : children}
    </button>
  );
};
export default Button;
