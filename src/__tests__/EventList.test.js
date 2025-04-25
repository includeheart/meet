import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test, describe } from '@jest/globals';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    const EventListComponent = render(<EventList events={
      [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    } />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    const EventListComponent = render(<EventList events={[]} />);
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});