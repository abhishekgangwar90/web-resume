import React, { useEffect } from 'react';
import Aos from 'aos';
import ExperienceCard from './profile-experience-card';
import { ExperienceConfig } from '../../types/experience-types';
import './profile-experience-styles.scss';

type Props = {
  experienceConfig: ExperienceConfig;
  toggleModalAction?: any;
};

const ProfileExperience: React.FunctionComponent<Props> = ({
  experienceConfig,
  toggleModalAction,
}: Props) => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      delay: 0,
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="experience">
      <h1 data-aos="fade-down">{experienceConfig.title}</h1>
      <h2 data-aos="fade-up">
        Total Experience: {experienceConfig.totalExp} years
      </h2>
      <section id="experience-list">
        {experienceConfig.experienceData.map((elm) => {
          return (
            <ExperienceCard
              toggleModalAction={toggleModalAction}
              key={elm.id}
              {...elm}
            />
          );
        })}
      </section>
    </section>
  );
};

ProfileExperience.defaultProps = {
  toggleModalAction: () => {},
};

export default ProfileExperience;
