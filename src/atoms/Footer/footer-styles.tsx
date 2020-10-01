import React from 'react';
import { styled } from '@material-ui/core';

/* eslint-disable import/prefer-default-export */
export const FooterContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  padding: '4% 0',
  color: '#fff',
  backgroundColor: 'rgb(37,36,34,0.8)',
});
