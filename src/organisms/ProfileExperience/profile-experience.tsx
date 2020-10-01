import React from 'react';
import { Typography } from '@material-ui/core';
import Carousel from '../../atoms/Carousel';
import {
  CarouselContainer,
  ExperienceContainer,
  ExperienceContent,
} from './profile-experience-styles';
import ExperienceCard from './profile-experience-card';

type Props = {
  experienceConfig: config;
};

type config = {
  title: string;
  experienceData: Array<any>;
};

const ProfileExperience: React.FunctionComponent<Props> = ({
  experienceConfig,
}: Props) => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <Typography variant="h3">{experienceConfig.title}</Typography>
        <CarouselContainer>
          <Carousel>
            {experienceConfig.experienceData.map((elm) => {
              return <ExperienceCard key={elm.id} {...elm} />;
            })}
          </Carousel>
        </CarouselContainer>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default ProfileExperience;
