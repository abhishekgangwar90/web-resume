import { Typography } from '@material-ui/core';
import React from 'react';
import { ExperienceData } from '../../types/experience-types';
import { ModalContainer } from './modal-experience-styles';

type Props = ExperienceData;

const ModalExperienceDetails: React.FunctionComponent<Props> = ({
  id,
  title,
  organization,
  startDate,
  endDate,
  experienceDetails,
  extendedDetails,
}: Props) => {
  return (
    <ModalContainer>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h5">@{organization}</Typography>
      <h1>@{organization}</h1>
      <h3>
        {startDate} - {endDate || 'Present'}
      </h3>
    </ModalContainer>
  );
};

export default ModalExperienceDetails;
