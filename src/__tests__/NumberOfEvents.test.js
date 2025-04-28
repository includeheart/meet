import React from 'react';
import { render } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders an input with textbox role', () => {
    const { getByRole } = render(<NumberOfEvents />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('default input value is 32', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const input = getByRole('textbox');
    expect(input).toHaveValue(32);
  });

  test('updates value on user typing', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<NumberOfEvents setErrorAlert={() => { }} />);
    const input = getByRole('textbox');
    await user.clear(input);
    await user.type(input, '10');
    expect(input).toHaveValue(10);
  });
});