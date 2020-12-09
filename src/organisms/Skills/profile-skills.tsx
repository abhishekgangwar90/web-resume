import React from 'react';
import { skillData } from './profile-skills-types';
import './profile-skills-styles.scss';

const ProfileSkillsList = React.lazy(() => import('./profile-skills-list'));

type Props = {
  skillsConfig: {
    title: string;
    canSearch: boolean;
    skillsData: Array<skillData>;
  };
};

const ProfileSkills: React.FunctionComponent<Props> = ({
  skillsConfig,
}: Props) => {
  return (
    <section id="skills">
      <header>
        <h1>{skillsConfig.title}</h1>
        <hr/>
      </header>
      <ProfileSkillsList skillsData={skillsConfig.skillsData} />
    </section>
  );
};

export default ProfileSkills;
