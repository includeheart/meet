import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ onChange }) => {
  const [value, setValue] = useState(32);
  const handleChange = (e) => {
    const newVal = Number(e.target.value);
    setValue(newVal);
    if (onChange) onChange(newVal);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-number-input">Number of Events:</label>
      <input
        type="number"
        role="textbox"
        id="event-number-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
NumberOfEvents.propTypes = {
  onChange: PropTypes.func,
};

export default NumberOfEvents;