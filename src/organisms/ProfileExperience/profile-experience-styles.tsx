/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Card, Container, Paper, styled, withStyles } from '@material-ui/core';

export const ExperienceContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  padding: '8% 0 11% 0',
  backgroundColor: '#f4ece6',
});

export const ExperienceContent = withStyles(() => ({}))(Container);

export const CarouselContainer = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  paddingTop: '4%',
});

export const ExperienceCardContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(29rem + 5vmin)',
    padding: '8% 6%',
    margin: '2%',
    backgroundColor: '#fff',
    borderRadius: '14px',
    // backgroundImage:
    //   'linear-gradient(to bottom, rgba(0, 82, 118,0.8) 0%,#fff 30%)',
  },
})((props) => <Card elevation={4} {...props} />);

export const ExperienceCardHeader = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  display: 'flex',
  flexDirection: 'column',
  height: '25%',
});

export const ExperienceCardDetails = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  display: 'flex',
  height: '60%',
});

export const ExperienceCardActions = styled(({ children, ...other }) => (
  <div {...other}>{children}</div>
))({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '15%',
});
