import React, { Suspense } from 'react';
import { ProfileConfig } from '../../config/profileConfig/profile-config';
import ContactInfo from '../../molecules/ContactInfo';
import Modal from '../../atoms/Modal';
import './profile-styles.scss';

const ProfileAbout = React.lazy(() => import('../../molecules/ProfileAbout'));
const ProfileExperience = React.lazy(
  () => import('../../organisms/ProfileExperience')
);
const ProfileSkills = React.lazy(
  () => import('../../organisms/Skills/profile-skills')
);

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
  const config = ProfileConfig;

  return (
    <>
      <ProfileAbout aboutConfig={config.about} />
      <section className="section" id="experience">
        <Suspense fallback={<article />}>
          <ProfileExperience experienceConfig={config.experience} />
        </Suspense>
      </section>
      {/* <section className="section" id="skills">
        <Suspense fallback={<article />}>
          <ProfileSkills skillsConfig={config.skills} />
        </Suspense>
      </section>
      <section className="section" id="contact">
        <Suspense fallback={<article />}>
          <ContactInfo />
        </Suspense>
      </section> */}
      <Modal {...modal} toggleModalAction={toggleModalAction} />
    </>
  );
};

export default Profile;
