import { Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from './profile-about-styles';

type Props = {
  actions: Array<any>;
};

const ProfileAboutAction: any = ({ actions = [] }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutActions}>
      {actions &&
        Array.isArray(actions) &&
        actions.map((elm) => {
          return (
            <Button
              key={elm.id}
              className={classes.button}
              startIcon={elm.icon}
              color={elm.color}
              variant={elm.variant}
            >
              {elm.name}
            </Button>
          );
        })}
    </div>
  );
};

export default ProfileAboutAction;
