import React from 'react'; 
import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { describe, test, expect, beforeEach } from '@jest/globals';

describe('<Event /> component', () => {
    let event;

    beforeEach(() => {
        event = {
            id: 1,
            summary: 'Sample Event',
            created: '2025-04-25T15:00:00Z',
            location: '123 Broadway, New York, NY',
            details: 'This is a sample event description.',
        };
    });

    test('Scenario 1: An event element is collapsed by default.', () => {
        const { queryByText } = render(<Event event={event} />);
        expect(queryByText(event.details)).toBeNull();
    });

    test('Scenario 2: User can expand an event to see details.', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        const expandButton = getByText('Show Details');
        fireEvent.click(expandButton);
        expect(queryByText(event.details)).toBeInTheDocument();
    });

    test('Scenario 3: User can collapse an event to hide details.', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        const expandButton = getByText('Show Details');
        fireEvent.click(expandButton);
        const collapseButton = getByText('Hide Details');
        fireEvent.click(collapseButton);
        expect(queryByText(event.details)).toBeNull();
    });

    test('renders the event title (summary)', () => {
        const { queryByText } = render(<Event event={event} />);
        expect(queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders the event start time (created)', () => {
        const { queryByText } = render(<Event event={event} />);
        const formatted = new Date(event.created).toLocaleString('en-US', { timeZone: 'UTC' });
        expect(queryByText(formatted)).toBeInTheDocument();
      });

    test('renders the event location', () => {
        const { queryByText } = render(<Event event={event} />);
        expect(queryByText(event.location)).toBeInTheDocument();
    });

    test('Details section is hidden by default and "Show Details" button is visible', () => {
        const { queryByText, getByText } = render(<Event event={event} />);
        expect(queryByText(event.details)).toBeNull(); // details hidden
        expect(getByText('Show Details')).toBeInTheDocument(); // show button visible
    });
      
    test('Clicking "Show Details" reveals details and hides the button', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        const showBtn = getByText('Show Details');
        fireEvent.click(showBtn);
      
        expect(queryByText(event.details)).toBeInTheDocument(); // details shown
        expect(queryByText('Show Details')).toBeNull(); // show button hidden
        expect(getByText('Hide Details')).toBeInTheDocument(); // hide button visible
    });
      
    test('Clicking "Hide Details" hides details and reveals "Show Details"', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        fireEvent.click(getByText('Show Details'));
        fireEvent.click(getByText('Hide Details'));
      
        expect(queryByText(event.details)).toBeNull(); // details hidden again
        expect(getByText('Show Details')).toBeInTheDocument(); // show button visible again
    });
});
