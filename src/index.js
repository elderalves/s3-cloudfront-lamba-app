import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Application from './Application';

import './index.css';

const basename = process.env.PUBLIC_URL || '/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Application />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
