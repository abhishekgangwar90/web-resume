/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Container, Paper, styled, withStyles } from '@material-ui/core';

export const ExperienceContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  margin: '7% 0',
  padding: '8% 0',
  backgroundColor: '#f4ece6',
});

export const ExperienceContent = withStyles(() => ({}))(Container);

// export const ExperienceCardContainer = styled(({ children, ...other }) => (
//   <div {...other}>{children}</div>
// ))({
//   padding: '6%',
//   margin: '2%',
//   backgroundColor: '#e6dace',
// });

export const ExperienceCardContainer = withStyles({
  root: {
    padding: '8% 6%',
    margin: '2%',
    backgroundColor: '#f8f8f8',
    borderRadius: '14px',
  },
})((props) => <Paper elevation={4} {...props} />);
