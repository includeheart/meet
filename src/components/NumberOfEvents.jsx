import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ onChange, setErrorAlert }) => {
  const [value, setValue] = useState(32);
  const handleInputChange = (e) => {
    const newVal = Number(e.target.value);
    setValue(newVal);

    if (isNaN(newVal) || newVal <= 0 || newVal > 100) {
      setErrorAlert("Please enter a valid number between 1 and 100.");
    } else {
      setErrorAlert("");
      if (onChange) onChange(newVal);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-number-input">Number of Events:</label>
      <input
        type="number"
        role="textbox"
        id="event-number-input"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  onChange: PropTypes.func,
  setErrorAlert: PropTypes.func.isRequired,
};

export default NumberOfEvents;