import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './profile-styles';
import { ProfileConfig } from './profile-config';

const ProfileHeader = React.lazy(() => import('../../molecules/ProfileHeader'));
const ProfileAbout = React.lazy(() => import('../../molecules/ProfileAbout'));

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
      <Suspense fallback="">
        <ProfileHeader headerConfig={config.header} />
      </Suspense>
      <Suspense fallback="">
        <ProfileAbout aboutConfig={config.about} />
      </Suspense>

      <Container>Hola</Container>
    </div>
  );
};

export default Profile;
