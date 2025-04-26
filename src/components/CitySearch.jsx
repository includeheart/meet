import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) =>
          location.toUpperCase().includes(value.toUpperCase())
        )
      : [];
    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value); // Call setCurrentCity to update the selected city
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [allLocations]);

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li onClick={handleItemClicked} key={suggestion}>
              {suggestion}
            </li>
          ))}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

CitySearch.propTypes = {
  allLocations: PropTypes.array.isRequired,
  setCurrentCity: PropTypes.func.isRequired, // Ensure setCurrentCity is passed as a prop
};

export default CitySearch;