import React, { useState } from 'react';
import './Button.css';

const Button = ({ text, variant, onClick }) => { // Add onClick to props
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`button ${variant} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Pass the onClick prop to the div
      role="button" // Optional: Add a role for accessibility
      tabIndex={0} // Optional: Make the button focusable
    >
      <span className={`button-text ${variant}`}>{text}</span>
    </div>
  );
};

export default Button;
