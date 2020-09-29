/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from '@material-ui/core';

export const ExperienceContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  margin: '7% 0',
  backgroundColor: '#e6e6e6',
});
