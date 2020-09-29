import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { ExperienceContainer } from './profile-experience-styles';

const ProfileExperience: React.FunctionComponent<any> = () => {
  return (
    <ExperienceContainer>
      <Container>Experience</Container>
    </ExperienceContainer>
  );
};

export default ProfileExperience;
