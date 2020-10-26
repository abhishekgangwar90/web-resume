/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from '@material-ui/core';

export const ModalContainer = styled(({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
})({
  padding: '5%',

  '& li': {
    margin: '1% 0',
  },
});
