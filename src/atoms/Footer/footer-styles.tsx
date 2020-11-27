/* eslint-disable import/prefer-default-export */

import React from 'react';
import { makeStyles, styled } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: '2%',

    '& div': {
      display: 'flex',
      alignItems: 'center',
    },
    '& div:nth-child(2)': {
      display: 'flex',
      justifyContent: 'flex-end',

      '& p': {
        display: 'flex',
        alignItems: 'center',
      },

      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
      },
    },
  },
  footerText: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '4%',
    },
  },
}));

export const FooterContainer = styled(({ children, ...other }) => (
  <footer {...other}>{children}</footer>
))({
  color: '#fff',
  width: '100%',
  flex: '0 1 auto',
  // backgroundColor: 'rgb(37,36,34,0.8)',
  backgroundColor: '#005276',
});
