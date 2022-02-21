import 'whatwg-fetch';
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';

import './mocks';

export function renderWithProvider(children) {
  return render(<BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>);
}
