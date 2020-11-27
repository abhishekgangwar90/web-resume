import React, { Suspense } from 'react';
import { Typography } from '@material-ui/core';

import { CenterAlignedTypography, useStyles } from './profile-about-styles';

const ProfileAboutAction = React.lazy(() => import('./profile-about-actions'));
const LocationOnIcon = React.lazy(
  () => import('@material-ui/icons/LocationOn')
);

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
    <article className={classes.aboutContainer}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5">{title}</Typography>
      <CenterAlignedTypography>
        <Suspense fallback="">
          <LocationOnIcon color="primary" />
        </Suspense>
        {location}
      </CenterAlignedTypography>
      <Typography variant="body1" className={classes.aboutText}>
        {aboutMe}
      </Typography>
      <Suspense fallback={<div />}>
        <ProfileAboutAction actions={actions} />
      </Suspense>
    </article>
  );
};

export default ProfileAboutContent;
