import React, { Suspense } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './profile-about-styles';

const ProfilePic = React.lazy(() => import('../../atoms/ProfilePic'));
const ProfileAboutContent = React.lazy(() => import('./profile-about-content'));

type Props = {
  aboutConfig: {
    name: string;
    title: string;
    aboutMe: string;
    location: string;
    actions: Array<any>;
  };
};

const ProfileAbout: React.FunctionComponent<Props> & {
  defaultProps: Partial<Props>;
} = ({ aboutConfig }: Props) => {
  const classes = useStyles();
  const renderProfilePic = () => {
    return (
      <Suspense fallback={<div />}>
        <ProfilePic />
      </Suspense>
    );
  };

  return (
    <Container id="about" className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid md={7} sm={7} xs={12} item>
          <Suspense fallback={<div />}>
            <ProfileAboutContent {...aboutConfig} />
          </Suspense>
        </Grid>
        <Grid md={5} sm={5} xs={12} item>
          {renderProfilePic()}
        </Grid>
      </Grid>
    </Container>
  );
};

ProfileAbout.defaultProps = {};

export default ProfileAbout;
