import React, { useState } from 'react';

const ColorFilter = ({ onChange }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange = (color) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    onChange(newColors);
  };

  const colorOptions = ['Red', 'Blue', 'Green'];

  return (
    <div>
      <h3>Color Filter</h3>
      {colorOptions.map(color => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={selectedColors.includes(color)}
            onChange={() => handleColorChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default ColorFilter;
