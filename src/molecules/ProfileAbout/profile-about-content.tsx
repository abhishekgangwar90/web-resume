import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';

import ProfileAboutAction from './profile-about-actions';
import { CenterAlignedTypography, useStyles } from './profile-about-styles';

type Props = {
  name: string;
  title: string;
  aboutMe: string;
  location: string;
  actions: Array<any>;
};

const ProfileAboutContent: React.FunctionComponent<Props> = ({
  name,
  title,
  aboutMe,
  location,
  actions,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5">{title}</Typography>
      <CenterAlignedTypography>
        <LocationOnIcon color="primary" />
        {location}
      </CenterAlignedTypography>
      <Typography variant="body1" className={classes.aboutText}>
        {aboutMe}
      </Typography>
      <ProfileAboutAction actions={actions} />
    </div>
  );
};

export default ProfileAboutContent;
