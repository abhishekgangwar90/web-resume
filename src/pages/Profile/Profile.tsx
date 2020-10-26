import React, { Suspense } from 'react';
import { useStyles } from './profile-styles';
import { ProfileConfig } from './config/profile-config';
import ContactInfo from '../../molecules/ContactInfo';
import Modal from '../../atoms/Modal';

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
  modal: {
    open: boolean;
    size: false;
    container: React.ReactNode | null;
  };
  toggleModalAction: (payload: any) => {};
}

const Profile: React.FunctionComponent<Props> = ({
  modal,
  toggleModalAction,
}: Props) => {
  const classes = useStyles();
  const config = ProfileConfig;

  return (
    <>
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
        <section className={classes.section} id="contact">
          <Suspense fallback={<div />}>
            <ContactInfo />
          </Suspense>
        </section>
        <Footer footerConfig={config.footer} />
      </div>
      <Modal {...modal} toggleModalAction={toggleModalAction} />
    </>
  );
};

export default Profile;
