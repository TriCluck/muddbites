import React from 'react';
import './textBox.css';

const TextBox = ({ placeholder, maxLength = 100, value, onChange }) => {
  return (
    <div className="text-box">
      <input
        type="text"
        className="text-box-input"
        placeholder={placeholder || "Type here..."}
        value={value} // Use the passed value
        onChange={onChange} // Use the passed onChange function
        maxLength={maxLength} // Limit the size of the input text
      />
    </div>
  );
};

export default TextBox;