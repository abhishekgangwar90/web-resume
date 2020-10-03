import { Container, Typography } from '@material-ui/core';
import React from 'react';
import ProfileSkillsList from './profile-skills-list';
import { SkillsContainer } from './profile-skills-styles';
import { subSkillType } from './profile-skills-types';

type Props = {
  skillsConfig: {
    title: string;
    canSearch: boolean;
    skillsData: Array<subSkillType>;
  };
};

const ProfileSkills: React.FunctionComponent<Props> = ({
  skillsConfig,
}: Props) => {
  return (
    <SkillsContainer>
      <Container>
        <Typography variant="h3">{skillsConfig.title}</Typography>
      </Container>
      <ProfileSkillsList skillsData={skillsConfig.skillsData} />
    </SkillsContainer>
  );
};

export default ProfileSkills;
