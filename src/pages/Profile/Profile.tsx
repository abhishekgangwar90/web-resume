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

const Profile: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const config = ProfileConfig;
  return (
    <div className={classes.container}>
      <ProfileHeader headerConfig={config.header} />
      <section className={classes.section} id="about">
        <Suspense fallback={<div />}>
          <ProfileAbout aboutConfig={config.about} />
        </Suspense>
      </section>
      <section className={classes.section} id="experience">
        <Suspense fallback={<div />}>
          <ProfileExperience experienceConfig={config.experience} />
        </Suspense>
      </section>
      <section className={classes.section} id="skills">
        <Suspense fallback={<div />}>
          <ProfileSkills skillsConfig={config.skills} />
        </Suspense>
      </section>
      <Footer footerConfig={config.footer} />
    </div>
  );
};

export default Profile;
