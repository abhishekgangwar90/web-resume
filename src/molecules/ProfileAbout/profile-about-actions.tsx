import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

import './profile-about-styles.scss';

type Props = {
  actions: Array<any>;
};

const ProfileAboutAction: any = ({ actions = [] }: Props) => {
  const onButtonClick = (e: any, url: string) => {
    window.open(url);
  };

  return (
    <article className="about-action ">
      {actions &&
        Array.isArray(actions) &&
        actions.map((elm) => {
          return (
            <Tooltip key={elm.id} title={elm.tooltip} arrow>
              <IconButton
                color={elm.color}
                aria-label={elm.name}
                onClick={(e: any) => onButtonClick(e, elm.url)}
              >
                {elm.icon}
              </IconButton>
            </Tooltip>
          );
        })}
    </article>
  );
};

export default ProfileAboutAction;
