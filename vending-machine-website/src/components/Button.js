import React, { useState } from 'react';
import './Button.css';

const Button = ({ text, variant }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`button ${variant} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`button-text ${variant}`}>{text}</span>
    </div>
  );
};

export default Button;
