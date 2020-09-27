import React from 'react';
import { Box, Button, Container } from '@material-ui/core';

import ProfileHeader from '../../molecules/ProfileHeader';
import { useStyles } from './profile-styles';
import { ProfileConfig } from './profile-config';
import ProfileAbout from '../../molecules/ProfileAbout';

interface Props {
  history: any;
  location: any;
  match: any;
}

const Profile: React.FunctionComponent<Props> = ({
  history,
  location,
  match,
}: Props) => {
  const classes = useStyles();
  const config = ProfileConfig;
  return (
    <div className={classes.container}>
      <ProfileHeader headerConfig={config.header} />
      <ProfileAbout aboutConfig={config.about} />
      <Container>Hola</Container>
    </div>
  );
};

export default Profile;
