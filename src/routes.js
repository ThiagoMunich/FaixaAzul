import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import CadastrarVeiculo from './pages/CadastrarVeiculo';
import Home from './pages/Home/';
import Dashboard from './layout/Dashboard'

function Routes() {
  return (
      <Dashboard>

    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={CadastrarVeiculo} exact path="/veiculo/cadastrar"/>

      </Switch>
    </BrowserRouter>
      </Dashboard>
  )
}

export default Routes;