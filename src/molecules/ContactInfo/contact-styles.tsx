/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Container, withStyles } from '@material-ui/core';

export const ContactContainer = withStyles(() => ({
  root: {
    display: 'flex',
  },
}))(Container);
