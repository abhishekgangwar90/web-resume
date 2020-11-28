import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from '../../atoms/Carousel';
import { CarouselContainer } from './profile-experience-styles';
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
  return (
    <section id="experience">
      <h1>{experienceConfig.title}</h1>
      <h3>Total Experience: {experienceConfig.totalExp} years</h3>
      <CarouselContainer>
        <Carousel>
          {experienceConfig.experienceData.map((elm) => {
            return (
              <ExperienceCard
                toggleModalAction={toggleModalAction}
                key={elm.id}
                {...elm}
              />
            );
          })}
        </Carousel>
      </CarouselContainer>
    </section>
  );
};

ProfileExperience.defaultProps = {
  toggleModalAction: () => {},
};

export default ProfileExperience;
