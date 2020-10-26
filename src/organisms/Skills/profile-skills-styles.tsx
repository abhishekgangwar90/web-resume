/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Container, makeStyles, styled, withStyles } from '@material-ui/core';

export const SkillsContainer = styled(({ children, ...rest }) => {
  return (
    <div id="skills" {...rest}>
      {children}
    </div>
  );
})({});

export const SkillListContainer = withStyles(() => ({}))(Container);

export const SkillList = styled(({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
})({
  paddingTop: '4%',
  '& h5': {
    marginBottom: '2%',
  },
});

export const useStyles = makeStyles((theme) => ({
  chip: {
    padding: '1%',
    margin: '1% 1% 1% 0',
  },
}));
