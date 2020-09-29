import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import defaultTheme from './themes/defaultTheme';
import './App.css';
import Layout from './molecules/Layout';
import appRoutes from './config/RouteConfig';

// carousel css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
