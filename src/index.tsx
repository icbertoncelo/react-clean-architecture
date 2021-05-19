import './presentation/styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HomeFactory } from './main/factories/pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <HomeFactory />
  </React.StrictMode>,
  document.getElementById('root'),
);
