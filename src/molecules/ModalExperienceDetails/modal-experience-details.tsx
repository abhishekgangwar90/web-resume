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
      <div style={{ paddingLeft: '1rem' }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">@{organization}</Typography>
        <Typography variant="body1">
          {startDate} - {endDate || 'Present'}
        </Typography>
      </div>
      <ul>
        {extendedDetails &&
          Array.isArray(extendedDetails) &&
          extendedDetails.map((elm) => {
            return (
              <li key={elm.id}>
                <Typography variant="body2">{elm.description}</Typography>
              </li>
            );
          })}
      </ul>
    </ModalContainer>
  );
};

export default ModalExperienceDetails;
