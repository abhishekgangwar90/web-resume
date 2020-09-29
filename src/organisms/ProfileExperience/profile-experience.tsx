import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from '../../atoms/Carousel';
import {
  ExperienceContainer,
  ExperienceContent,
} from './profile-experience-styles';
import ExperienceCard from './profile-experince-card';

type Props = {
  experienceConfig: config;
};

type config = {
  title: string;
  experienceDetails: Array<any>;
};

const ProfileExperience: React.FunctionComponent<Props> = ({
  experienceConfig,
}: Props) => {
  return (
    <ExperienceContainer>
      <ExperienceContent>
        <Typography variant="h3">{experienceConfig.title}</Typography>
        <div style={{ paddingTop: '4%' }}>
          <Carousel>
            {experienceConfig.experienceDetails.map((elm) => {
              return <ExperienceCard key={elm.id} {...elm} />;
            })}
          </Carousel>
        </div>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default ProfileExperience;
