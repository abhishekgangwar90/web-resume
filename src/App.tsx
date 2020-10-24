import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import defaultTheme from './themes/defaultTheme';
import './App.scss';
import Layout from './molecules/Layout';
import appRoutes from './config/RouteConfig';

const App: React.FunctionComponent<any> = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Layout appRoutes={appRoutes} />
      </ThemeProvider>
    </div>
  );
};

export default App;
