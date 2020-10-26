import React from 'react';
import { Typography } from '@material-ui/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from '../../atoms/Carousel';
import {
  CarouselContainer,
  ExperienceContainer,
  ExperienceContent,
} from './profile-experience-styles';
import ExperienceCard from './profile-experience-card';
import { ExperienceConfig } from '../../types/experience-types';

type Props = {
  experienceConfig: ExperienceConfig;
  toggleModalAction?: any;
};

const ProfileExperience: React.FunctionComponent<Props> = ({
  experienceConfig,
  toggleModalAction,
}: Props) => {
  return (
    <ExperienceContainer>
      <ExperienceContent>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          {experienceConfig.title}
        </Typography>
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
      </ExperienceContent>
    </ExperienceContainer>
  );
};

ProfileExperience.defaultProps = {
  toggleModalAction: () => {},
};

export default ProfileExperience;
