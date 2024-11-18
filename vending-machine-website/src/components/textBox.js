import React, { useState } from 'react';
import './textBox.css';

const TextBox = ({ placeholder, maxLength = 100 }) => {
  const [text, setText] = useState('');

  return (
    <div className="text-box">
      <input
        type="text"
        className="text-box-input"
        placeholder={placeholder || "Type here..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength} // Limit the size of the input text
      />
    </div>
  );
};

export default TextBox;
