import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';

it('renders without crashing', () => {
  const div = rtl.render(<App />);
  const getByText = div.getAllByText;

  getByText(/search/i);
  // getByText(/class/i);
  // getByText(/form/i);
});
