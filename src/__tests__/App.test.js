import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import 'jest';
import { beforeEach, test, describe, expect } from '@jest/globals';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('renders NumberOfEvents component', () => {
    const { container } = render(<App />);
    const numberInput = container.firstChild.querySelector('#number-of-events');
    expect(numberInput).toBeInTheDocument();
  });
});