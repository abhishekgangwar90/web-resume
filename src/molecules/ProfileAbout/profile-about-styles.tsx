/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 'calc(22px + 2vmin)',
    alignItems: 'center',
    display: 'flex',
  },
  aboutContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  aboutActions: {
    paddingTop: 'calc(2rem + 2vmin)',
  },
  aboutText: {
    paddingTop: 'calc(10px + 2vmin)',
    textAlign: 'justify',
  },
  button: {
    textTransform: 'none',
    marginRight: '1rem',
    fontSize: '14px',
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
