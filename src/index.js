import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/Home';
import Stack from './components/Stack';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Stack />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
