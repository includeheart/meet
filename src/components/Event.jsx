import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDetails = () => setIsExpanded(prev => !prev);

  return (
    <li className = "event">
      <h3>{event.summary}</h3>
      <p>{new Date(event.created).toLocaleString('en-US', { timeZone: 'UTC' })}</p>
      <p>{event.location}</p>
      {!isExpanded && <button className="details-btn" onClick={toggleDetails}>Show Details</button>}
      {isExpanded && (
        <>
          <p className="details">{event.details}</p>
          <button className="details-btn" onClick={toggleDetails}>Hide Details</button>
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