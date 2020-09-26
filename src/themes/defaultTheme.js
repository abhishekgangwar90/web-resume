/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';
import merriWeather from './defaultFont';

const materialTheme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fff' },
    primary: {
      main: 'rgba(0, 105, 143,0.9)',
      light: 'rgba(0, 105, 143,0.8)',
      dark: 'rgba(0, 105, 143,1.0)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgb(37,36,34,0.8)',
      main: 'rgb(37, 36, 34,1)',
      dark: '#000',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: 'Merriweather-Regular',
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '48px',
      },
      h2: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '36px',
      },
      h3: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '28px',
      },
      h4: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '24px',
      },
      h5: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '22px',
      },
      h6: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '18px',
      },
      subtitle1: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '24px',
      },
      subtitle2: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '20px',
      },
      body1: {
        fontFamily: 'Merriweather-Regular',
        fontSize: '18px',
      },
      body2: {
        fontFamily: 'Merriweather-Regular',
        fontSize: '18px',
      },
      button: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '18px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [merriWeather],
      },
    },
  },
});

export default materialTheme;
