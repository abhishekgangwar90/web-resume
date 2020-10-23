import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import { useStyles } from './profile-about-styles';

type Props = {
  actions: Array<any>;
};

const ProfileAboutAction: any = ({ actions = [] }: Props) => {
  const classes = useStyles();

  const onButtonClick = (e: any, url: string) => {
    window.open(url);
  };

  return (
    <div className={classes.aboutActions}>
      {actions &&
        Array.isArray(actions) &&
        actions.map((elm) => {
          return (
            <IconButton
              key={elm.id}
              className={classes.button}
              color={elm.color}
              name={elm.name}
              onClick={(e: any) => onButtonClick(e, elm.url)}
            >
              {elm.icon}
            </IconButton>
          );
        })}
    </div>
  );
};

export default ProfileAboutAction;
