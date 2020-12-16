import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'fontsource-asap'

import Home from './pages/Home/';
import useMain from './hooks/useMain'
import Dashboard from './layout/Dashboard'

function Routes() {

  const { tema } = useMain()

  const theme = createMuiTheme({
    palette: {
      type: tema === 'dark' ? 'dark' : 'light',
      primary: {
        main: tema === 'dark' ? '#C9D200' : '#49479D',
      },
      secondary: {
        main: tema === 'dark' ? '#C9D' : '#D50000',
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: 'Asap',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': {
            fontWeight: 500,
            fontFamily: 'Asap',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>

      <Dashboard>

        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path="/" />
          </Switch>
        </BrowserRouter>
      </Dashboard>
    </ThemeProvider>
  )
}

export default Routes;