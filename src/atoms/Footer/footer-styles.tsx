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

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'flex-start',
      },
    },
  },
}));

export const FooterContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  padding: '2% 0',
  color: '#fff',
  // backgroundColor: 'rgb(37,36,34,0.8)',
  backgroundColor: '#005276',
});
