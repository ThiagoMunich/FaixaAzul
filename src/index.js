import React from 'react';
import ReactDOM from 'react-dom';

import MainProvider from './context/MainContext'
import Routes from './routes';

ReactDOM.render(
  <MainProvider>
    <Routes />
  </MainProvider>,
  document.getElementById('root')
);
