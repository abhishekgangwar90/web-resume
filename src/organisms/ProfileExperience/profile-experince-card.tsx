import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { ExperienceCardContainer } from './profile-experience-styles';

type Props = {
  id: number;
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  details: string;
};

const ExperienceCard: React.FunctionComponent<Props> = ({
  id,
  title,
  organization,
  startDate,
  endDate,
  details,
}: Props) => {
  return (
    <ExperienceCardContainer>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2">{`@${organization}`} </Typography>
      <Typography variant="body1">
        {startDate} - {endDate || 'Present'}
      </Typography>
      <Typography style={{ padding: '10% 4% 0 0' }} variant="body2">
        {details}
      </Typography>
      <div
        style={{
          paddingTop: '10%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="contained" color="primary">
          More Details
        </Button>
      </div>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
