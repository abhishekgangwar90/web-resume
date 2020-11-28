import React from 'react';
import { ExperienceData } from '../../types/experience-types';

type Props = ExperienceData & {
  toggleModalAction: any;
};

const ExperienceCard: React.FunctionComponent<Props> = ({
  id,
  organization,
  startDate,
  endDate,
  experienceDetails,
  toggleModalAction,
}: Props) => {
  const renderExperienceDetails = () => {
    return (
      experienceDetails &&
      Array.isArray(experienceDetails) &&
      experienceDetails.map((elm) => {
        return (
          <li data-aos="fade-left" key={elm.id}>
            {elm.description}
          </li>
        );
      })
    );
  };

  return (
    <article className="experience-container">
      <h2 data-aos="fade-right">{`@${organization}`} </h2>
      <h3 data-aos="fade-left">
        {startDate} - {endDate || 'Present'}
      </h3>
      <ul>{renderExperienceDetails()}</ul>
    </article>
  );
};

export default ExperienceCard;
