import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import defaultTheme from './themes/defaultTheme';
import './App.css';
import Layout from './molecules/Layout';
import appRoutes from './config/RouteConfig';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Layout appRoutes={appRoutes} />
    </ThemeProvider>
  );
}

export default App;
