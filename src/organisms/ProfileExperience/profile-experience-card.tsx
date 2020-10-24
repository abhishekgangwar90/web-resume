import { Button, Typography } from '@material-ui/core';
import React from 'react';
import {
  ExperienceCardContainer,
  ExperienceCardActions,
  ExperienceCardDetails,
  ExperienceCardHeader,
} from './profile-experience-styles';

type Props = {
  id: number;
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  experienceDetails: Array<experienceDetail>;
  toggleModalAction: any;
};

type experienceDetail = {
  id: number;
  description: string;
};

const ExperienceCard: React.FunctionComponent<Props> = ({
  id,
  title,
  organization,
  startDate,
  endDate,
  experienceDetails,
  toggleModalAction,
}: Props) => {
  const handleClick = () => {
    toggleModalAction({
      open: true,
      size: 'xl',
      container: '<>Hello</>',
    });
  };

  const renderExperienceDetails = () => {
    return (
      <ul>
        {experienceDetails &&
          Array.isArray(experienceDetails) &&
          experienceDetails.map((elm) => {
            return (
              <li key={elm.id}>
                <Typography variant="body2">{elm.description}</Typography>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <ExperienceCardContainer>
      <ExperienceCardHeader>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{`@${organization}`} </Typography>
        <Typography variant="body1">
          {startDate} - {endDate || 'Present'}
        </Typography>
      </ExperienceCardHeader>
      <ExperienceCardDetails>{renderExperienceDetails()}</ExperienceCardDetails>
      <ExperienceCardActions>
        <Button
          area-label="more-details"
          variant="contained"
          onClick={handleClick}
          color="primary"
        >
          More Details
        </Button>
      </ExperienceCardActions>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
