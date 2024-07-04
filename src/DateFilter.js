import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ onChange }) => {
  const [dateType, setDateType] = useState('');
  const [dateValue, setDateValue] = useState(null);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setDateType(type);
    onChange({ type, value: dateValue });
  };

  const handleDateChange = (date) => {
    setDateValue(date);
    onChange({ type: dateType, value: date });
  };

  return (
    <div>
      <h3>Date Filter</h3>
      <select value={dateType} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        <option value="after">After</option>
        <option value="before">Before</option>
        <option value="on">On</option>
      </select>
      <DatePicker
        selected={dateValue}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
        minDate={new Date(1980, 0, 1)}
        maxDate={new Date(2020, 11, 31)}
      />
    </div>
  );
};

export default DateFilter;
