import React, { Suspense } from 'react';
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
    <section className={classes.container}>
      <ProfileAboutContent {...aboutConfig} />
      {renderProfilePic()}
    </section>
  );
};

ProfileAbout.defaultProps = {};

export default ProfileAbout;
