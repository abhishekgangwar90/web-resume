import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { subSkillType } from './profile-skills-types';
import './profile-skills-styles.scss';

const ProfileSkillsList = React.lazy(() => import('./profile-skills-list'));

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
    <section id="skills">
      <header>
        <h1>{skillsConfig.title}</h1>
        <p>hello hello</p>
      </header>
      <article>
        <ProfileSkillsList skillsData={skillsConfig.skillsData} />
      </article>
    </section>
  );
};

export default ProfileSkills;
