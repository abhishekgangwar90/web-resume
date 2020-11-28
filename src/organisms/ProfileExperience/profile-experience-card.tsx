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
              <li data-aos="fade-left" key={elm.id}>
                {elm.description}
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <article className="experience-container">
      <article data-aos="fade-right">
        <h2>{`@${organization}`} </h2>
        <h3>
          {startDate} - {endDate || 'Present'}
        </h3>
      </article>
      <ExperienceCardDetails>{renderExperienceDetails()}</ExperienceCardDetails>
    </article>
  );
};

export default ExperienceCard;
