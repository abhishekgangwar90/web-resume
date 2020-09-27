import { Typography } from '@material-ui/core';
import React from 'react';
import ProfileAboutAction from './profile-about-actions';
import { useStyles } from './profile-about-styles';

type Props = {
  name: string;
  title: string;
  aboutMe: string;
  actions: Array<any>;
};

const ProfileAboutContent: React.FunctionComponent<Props> = ({
  name,
  title,
  aboutMe,
  actions,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" className={classes.aboutText}>
        {aboutMe}
      </Typography>
      <ProfileAboutAction actions={actions} />
    </div>
  );
};

export default ProfileAboutContent;
