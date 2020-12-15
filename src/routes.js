import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home/';
import Dashboard from './layout/Dashboard'

function Routes() {
  return (
    <Dashboard>

      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
      </BrowserRouter>
    </Dashboard>
  )
}

export default Routes;