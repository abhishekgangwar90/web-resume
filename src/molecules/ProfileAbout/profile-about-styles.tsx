/* eslint-disable import/prefer-default-export */

import React from 'react';
import { makeStyles, Typography, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      padding: '0 45px',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '0 25px',
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
    paddingTop: 'calc(1rem + 2vmin)',

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
    marginRight: '1rem',
  },
}));

export const CenterAlignedTypography = withStyles((theme) => ({
  root: {
    display: 'flex',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))(({ children, ...rest }) => <Typography {...rest}>{children}</Typography>);
