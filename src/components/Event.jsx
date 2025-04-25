import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDetails = () => setIsExpanded(prev => !prev);

  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{new Date(event.created).toLocaleString('en-US', { timeZone: 'UTC' })}</p>
      <p>{event.location}</p>
      {!isExpanded && <button onClick={toggleDetails}>Show Details</button>}
      {isExpanded && (
        <>
          <p>{event.details}</p>
          <button onClick={toggleDetails}>Hide Details</button>
        </>
      )}
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    details: PropTypes.string,
  }).isRequired,
};

export default Event;