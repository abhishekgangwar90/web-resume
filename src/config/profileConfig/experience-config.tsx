/* eslint-disable import/prefer-default-export */
import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import { getTotalExperience } from '../../utils/app.utils';

export const experienceConfig = {
  title: 'Work Experience',
  icon: <WorkIcon />,
  totalExp: getTotalExperience(),
  experienceData: [
    {
      id: 1,
      organization: 'Gartner Inc.',
      startDate: 'June, 2019',
      endDate: 'December, 2020',
      experienceDetails: [
        {
          id: 1,
          description: `Single-handedly spearheaded migration of data insights UI from Sisense to custom Dashboard using technologies like - React, Redux, High-Charts and Material-UI erc.`,
        },
        {
          id: 2,
          description:
            'Implemented micro-frontend architecture for improving scalability and reducing delivery time.',
        },
        {
          id: 3,
          description:
            'Worked on admin portal to provide a rich and smooth onboarding experience for new users.',
        },
      ],
    },
    {
      id: 2,
      organization: 'GlobalLogic India',
      startDate: 'October, 2016',
      endDate: 'June, 2019',
      experienceDetails: [
        {
          id: 1,
          description:
            'Worked on developing secure Mobile and desktop applications for US based retail client KOHLS.',
        },
        {
          id: 2,
          description: `Worked within close collaboration of other team members to develop desktop 
          application "Self-checkout" where customers can scan product and apply discounts and process payment on it’s own.`,
        },
        {
          id: 3,
          description:
            'Single-handedly modularized the associate-checkout application using Ngrx and Rxjs.',
        },
      ],
    },
  ],
};
