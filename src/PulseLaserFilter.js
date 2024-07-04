import React, { useState } from 'react';

const PulseLaserFilter = ({ onChange }) => {
  const [pulseLaser, setPulseLaser] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPulseLaser(value);
    onChange(value);
  };

  return (
    <div>
      <h3>Pulse Laser Filter</h3>
      <select value={pulseLaser} onChange={handleChange}>
        <option value="">Select</option>
        <option value="true">Has Pulse Laser</option>
        <option value="false">No Pulse Laser</option>
      </select>
    </div>
  );
};

export default PulseLaserFilter;
