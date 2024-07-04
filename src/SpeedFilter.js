import React, { useState } from 'react';

const SpeedFilter = ({ onChange }) => {
    const [speedType, setSpeedType] = useState('');
    const [speedValue, setSpeedValue] = useState('');

    const handleTypeChange = (e) => {
        setSpeedType(e.target.value);
        onChange({ type: e.target.value, value: speedValue });
    };

    const handleValueChange = (e) => {
        setSpeedValue(e.target.value);
        onChange({ type: speedType, value: e.target.value });
    };

    return (
        <div>
            <h3>Speed Filter</h3>
            <select value={speedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                <option value="lt">Less than</option>
                <option value="gt">More than</option>
                <option value="eq">Exactly</option>
            </select>
            <input
                type="number"
                value={speedValue}
                onChange={handleValueChange}
                placeholder="Enter speed"
            />
        </div>
    );
};

export default SpeedFilter;
