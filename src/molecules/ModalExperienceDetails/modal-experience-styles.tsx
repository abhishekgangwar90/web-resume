/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from '@material-ui/core';

export const ModalContainer = styled(({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
})({
  padding: '2%',
  width: '50rem',
});
