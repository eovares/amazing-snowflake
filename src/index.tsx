import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import { temperaturesContainer } from './temperature/TemperatureCollectionStore';

const rootElement = document.getElementById('root');
render(
  <Provider temperatures={temperaturesContainer}>
    <App />
  </Provider>,
  rootElement
);

// https://mobx.js.org/refguide/inject.html
