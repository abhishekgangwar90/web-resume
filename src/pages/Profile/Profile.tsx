import React, { Suspense } from 'react';
import { useStyles } from './profile-styles';
import { ProfileConfig } from './config/profile-config';

const ProfileHeader = React.lazy(() => import('../../molecules/ProfileHeader'));
const ProfileAbout = React.lazy(() => import('../../molecules/ProfileAbout'));
const ProfileExperience = React.lazy(
  () => import('../../organisms/ProfileExperience')
);
const ProfileSkills = React.lazy(
  () => import('../../organisms/Skills/profile-skills')
);
const Footer = React.lazy(() => import('../../atoms/Footer'));

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
      <Suspense fallback={<div />}>
        <ProfileHeader headerConfig={config.header} />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProfileAbout aboutConfig={config.about} />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProfileExperience experienceConfig={config.experience} />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProfileSkills skillsConfig={config.skills} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer footerConfig={config.footer} />
      </Suspense>
    </div>
  );
};

export default Profile;
