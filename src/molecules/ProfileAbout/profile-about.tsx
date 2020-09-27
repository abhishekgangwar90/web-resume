import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './profile-about-styles';
import ProfileAboutContent from './profile-about-content';
import ProfileAboutAction from './profile-about-actions';

const ProfilePic = React.lazy(() => import('../../atoms/ProfilePic'));

type Props = {
  aboutConfig: {
    name: string;
    title: string;
    aboutMe: string;
    actions: Array<any>;
  };
};

const ProfileAbout: React.FunctionComponent<Props> & {
  defaultProps: Partial<Props>;
} = ({ aboutConfig }: Props) => {
  const classes = useStyles();
  const renderProfilePic = () => {
    return <ProfilePic />;
  };

  return (
    <Container className={classes.container}>
      <Grid container>
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
