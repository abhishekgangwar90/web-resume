import React from 'react';
import { skillData } from './profile-skills-types';

type Props = {
  skillsData: Array<skillData>;
};

const ProfileSkillsList: React.FunctionComponent<Props> = ({
  skillsData,
}: Props) => {

  return (
    <article id="skill-list">
      {skillsData.map((elm) => {
        return (
          <figure key={elm.id} id="card">
            <img alt="img" src={elm.icon}/>
            <figcaption>{elm.skillTitle}</figcaption>
          </figure>
        );
      })}
    </article>
  );
};

export default ProfileSkillsList;
