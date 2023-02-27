import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './';
import Sobre from './videoaulas';
import Usuario from './Usuario';
import { Card } from './components/Card';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Route component={Home} path="/" exact /> */}
      <Route component={Card} path="/videoaulas" />
      <Route component={Usuario} path="/usuario" />
    </BrowserRouter>
  );
};

export default Routes;
