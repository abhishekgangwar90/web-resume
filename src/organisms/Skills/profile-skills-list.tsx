import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import {
  useStyles,
  SkillList,
  SkillListContainer,
} from './profile-skills-styles';
import { subSkillType } from './profile-skills-types';

type Props = {
  skillsData: Array<subSkillType>;
};

const ProfileSkillsList: React.FunctionComponent<Props> = ({
  skillsData,
}: Props) => {
  const classes = useStyles();

  const renderSubSkills = (skillData: any) => {
    return (
      <div>
        {skillData.map((elm: any) => (
          <Chip
            className={classes.chip}
            key={elm.id}
            color="primary"
            label={elm.subSkillTitle}
          />
        ))}
      </div>
    );
  };

  return (
    <SkillListContainer>
      {skillsData.map((elm) => {
        return (
          <SkillList key={elm.id}>
            <Typography variant="h5">{elm.skillHeader}</Typography>
            {renderSubSkills(elm.subSkillsData)}
          </SkillList>
        );
      })}
    </SkillListContainer>
  );
};

export default ProfileSkillsList;
