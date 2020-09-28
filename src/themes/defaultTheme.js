/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import merriWeather from './defaultFont';

const materialTheme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fff' },
    primary: {
      main: 'rgba(0, 115, 177,1.0)',
      light: 'rgba(0, 128, 196,1.0)',
      dark: 'rgba(0, 119, 190,1.0)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#fff',
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
        fontSize: '38px',
      },
      h3: {
        fontFamily: 'Merriweather-Bold',
        fontSize: '30px',
      },
      h4: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '24px',
      },
      h5: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '20px',
      },
      h6: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '18px',
      },
      subtitle1: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '20px',
      },
      subtitle2: {
        fontFamily: 'Merriweather-Medium',
        fontSize: '18px',
      },
      body1: {
        fontFamily: 'Merriweather-Regular',
        fontSize: '18px',
      },
      body2: {
        fontFamily: 'Merriweather-Regular',
        fontSize: '16px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [merriWeather],
        fontDisplay: 'swap',
      },
    },
  },
});

const modifiedTheme = responsiveFontSizes(materialTheme);

export default modifiedTheme;
