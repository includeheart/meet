import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import mockData from './mock-data.js';
import { extractLocations } from './api';

const App = () => {
  const events = mockData;
  const locations = extractLocations(events);

  return (
    <div>
      <CitySearch id="city-search" allLocations={locations} />
      <EventList id="event-list" events={events} />
      <NumberOfEvents id="number-of-events" />
    </div>
  );
};

export default App;
