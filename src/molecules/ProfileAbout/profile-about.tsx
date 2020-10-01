import React, { Suspense } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './profile-about-styles';
import ProfileAboutContent from './profile-about-content';

const ProfilePic = React.lazy(() => import('../../atoms/ProfilePic'));

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
          <ProfileAboutContent {...aboutConfig} />
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
