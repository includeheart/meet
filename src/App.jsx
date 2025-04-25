import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  const sampleEvent = {
    summary: 'Sample Event',
    created: '2025-04-25T15:00:00Z',
    location: 'Sample location',
    details: 'This is a sample event description.',
  };

  const locations = ['New York', 'Berlin', 'London'];

  const events = [
    {
      id: 'e1',
      summary: 'Sample Event 1',
      created: '2025-04-25T15:00:00Z',
      location: 'Sample Location 1',
      details: 'This is the first sample event.',
    },
    {
      id: 'e2',
      summary: 'Sample Event 2',
      created: '2025-04-26T15:00:00Z',
      location: 'Sample Location 2',
      details: 'This is the second sample event.',
    },
  ];

  return (
    <div>
      <Event event={sampleEvent} id="event" />
      <CitySearch id="city-search" allLocations={locations} />
      <EventList id="event-list" events={events} />
      <NumberOfEvents id="number-of-events" />
    </div>
  );
};

export default App;
