import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
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
            <Tooltip key={elm.id} title={elm.tooltip} arrow>
              <IconButton
                className={classes.button}
                color={elm.color}
                aria-label={elm.name}
                onClick={(e: any) => onButtonClick(e, elm.url)}
              >
                {elm.icon}
              </IconButton>
            </Tooltip>
          );
        })}
    </div>
  );
};

export default ProfileAboutAction;
