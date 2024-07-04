import React, { useState } from 'react';
import ColorFilter from './ColorFilter';
import SpeedFilter from './SpeedFilter';
import DateFilter from './DateFilter';
import PulseLaserFilter from './PulseLaserFilter';

const App = () => {
  const [filters, setFilters] = useState({
    colors: [],
    speed: { type: '', value: '' },
    date: { type: '', value: '' },
    pulseLaser: ''
  });

  const updateFilter = (filterName, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue
    }));
  };

  const generateQueryString = () => {
    const queryParts = [];

    if (filters.colors.length) {
      queryParts.push(`colors=${filters.colors.join(',')}`);
    }

    if (filters.speed.type && filters.speed.value) {
      queryParts.push(`speed_${filters.speed.type}=${filters.speed.value}`);
    }

    if (filters.date.type && filters.date.value) {
      queryParts.push(`date_${filters.date.type}=${filters.date.value.toISOString()}`);
    }

    if (filters.pulseLaser) {
      queryParts.push(`pulseLaser=${filters.pulseLaser}`);
    }

    return queryParts.join('&');
  };

  return (
    <div>
      <h1>Spaceship Filter</h1>
      <ColorFilter onChange={value => updateFilter('colors', value)} />
      <SpeedFilter onChange={value => updateFilter('speed', value)} />
      <DateFilter onChange={value => updateFilter('date', value)} />
      <PulseLaserFilter onChange={value => updateFilter('pulseLaser', value)} />
      <div>
        <h2>Query String</h2>
        <p>{generateQueryString()}</p>
      </div>
    </div>
  );
};

export default App;
