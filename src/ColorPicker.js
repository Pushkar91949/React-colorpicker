// src/ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{
                backgroundColor: color,
              }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color">
          <p>Selected Color:</p>
          <div
            className="color-optionnew"
            style={{
                
              backgroundColor: selectedColor,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
