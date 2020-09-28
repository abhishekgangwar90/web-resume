/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 'calc(32px + 2vmin)',
    alignItems: 'center',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      padding: '0 45px',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '0 25px',
      marginTop: '0',
    },
  },
  grid: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  aboutContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  aboutActions: {
    paddingTop: 'calc(2rem + 2vmin)',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  aboutText: {
    paddingTop: 'calc(10px + 2vmin)',
    textAlign: 'justify',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'inherit',
    },
  },
  button: {
    textTransform: 'none',
    marginRight: '1rem',
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      marginRight: '2rem',

      '& .MuiButton-iconSizeMedium > *:first-child': {
        fontSize: '24px',
      },
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      marginRight: '2rem',

      '& .MuiButton-iconSizeMedium > *:first-child': {
        fontSize: '30px',
      },
    },
  },
}));
