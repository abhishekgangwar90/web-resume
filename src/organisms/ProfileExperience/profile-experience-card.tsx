import { Button, Typography } from '@material-ui/core';
import React from 'react';
import ModalExperienceDetails from '../../molecules/ModalExperienceDetails';
import { ExperienceData } from '../../types/experience-types';
import {
  useStyles,
  ExperienceCardContainer,
  ExperienceCardActions,
  ExperienceCardDetails,
  ExperienceCardHeader,
} from './profile-experience-styles';

type Props = ExperienceData & {
  toggleModalAction: any;
};

const ExperienceCard: React.FunctionComponent<Props> = ({
  id,
  title,
  organization,
  startDate,
  endDate,
  experienceDetails,
  extendedDetails,
  toggleModalAction,
}: Props) => {
  const classes = useStyles();
  const handleClick = () => {
    toggleModalAction({
      open: true,
      size: 'md',
      container: (
        <ModalExperienceDetails
          id={id}
          title={title}
          organization={organization}
          startDate={startDate}
          endDate={endDate}
          experienceDetails={experienceDetails}
          extendedDetails={extendedDetails}
        />
      ),
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
          className={classes.button}
        >
          More Details
        </Button>
      </ExperienceCardActions>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
