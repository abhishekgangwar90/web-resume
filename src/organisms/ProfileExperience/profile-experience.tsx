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
      offset: 150, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
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
