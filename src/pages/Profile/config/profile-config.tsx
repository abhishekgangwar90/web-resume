/* eslint-disable import/prefer-default-export */
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { skillsConfig } from './skills-config';

export const ProfileConfig = {
  id: 'profile',
  title: 'Profile',
  header: {
    title: 'Abhishek Gangwar',
    navOptions: [
      {
        id: 1,
        name: 'home',
        title: 'Home',
        targetId: 'about',
      },
      {
        id: 2,
        name: 'experience',
        title: 'Experience',
        targetId: 'experience',
      },
      {
        id: 3,
        name: 'skills',
        title: 'Skills',
        targetId: 'skills',
      },
      {
        id: 4,
        name: 'contact',
        title: 'Contact',
        targetId: 'contact',
      },
    ],
  },
  about: {
    name: 'Abhishek Gangwar',
    title: 'Front-end Developer',
    location: 'Gurugram, India',
    aboutMe: `Results-oriented software engineering professional with 4 years of expertise in building secure applications. An excellent collaborator with a cheerful outlook seeking a role in building Web and mobile applications for a well-established software company.`,
    actions: [
      {
        id: 1,
        icon: '',
        variant: 'outlined',
        color: 'primary',
        name: 'StackOverFlow',
        url: 'https://stackoverflow.com/users/9269538/abhishek-gangwar',
      },
      {
        id: 2,
        icon: <LinkedInIcon fontSize="large" />,
        variant: 'contained',
        color: 'primary',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
    ],
  },
  experience: {
    title: 'Work Experience',
    experienceData: [
      {
        id: 1,
        title: 'Software Engineer',
        organization: 'Gartner Inc.',
        startDate: 'June, 2019',
        endDate: null,
        experienceDetails: [
          {
            id: 1,
            description: `Single-handedly spearheaded migration of data insights UI from Sisense to custom React Dashboard.`,
          },
          {
            id: 2,
            description:
              'Implemented micro-frontend architecture for improving scalability and reducing delivery time.',
          },
        ],
        extendedDetails: [
          {
            id: 1,
            description: `Single-handedly spearheaded migration of data insights UI from Sisense, which saved $65000/year of Subscription money and increased project revenue by 85%.`,
          },
          {
            id: 2,
            description:
              'Implemented micro-frontend architecture for improving scalability and reducing delivery time.',
          },
        ],
      },
      {
        id: 2,
        title: 'Senior Soft. Engineer',
        organization: 'GlobalLogic India',
        startDate: 'June, 2019',
        endDate: null,
        experienceDetails: [
          {
            id: 1,
            description:
              'Worked on developing payment module which can be used as a common payment gateway for store-platform applications.',
          },
          {
            id: 2,
            description:
              'Worked on modularizing self checkout application to improve performance and scalability',
          },
        ],
      },
      {
        id: 3,
        title: 'Software Engineer',
        organization: 'GlobalLogic India',
        startDate: 'July, 2018',
        endDate: 'Jan, 2019',
        experienceDetails: [
          {
            id: 1,
            description:
              'Developed self-checkout application for Kohls which was launched into 150 kohls stores across the United States .',
          },
          {
            id: 2,
            description:
              'Improved scalability and performance of associate checkout application which was deployed into 750 stores after a successful pilot launch.',
          },
        ],
      },
      {
        id: 4,
        title: 'Associate Soft. Engineer',
        organization: 'GlobalLogic India',
        startDate: 'October, 2016',
        endDate: 'July, 2018',
        experienceDetails: [
          {
            id: 1,
            description:
              'Developed Associate checkout application for IOS Platform using Angular and Ionic, which allows an associate to process products and payments.',
          },
          {
            id: 2,
            description:
              'Worked on modularizing associate checkout application using NGRx, Redux, and Rxjs.',
          },
        ],
        extendedDetails: [
          {
            id: 1,
            description:
              'Developed Associate checkout application for IOS Platform which was launched into 150 Kohls stores in pilot phase which was used to place approx. 10,000 orders during the festive time.',
          },
          {
            id: 2,
            description:
              'Improved scalability and performance of associate checkout application which was deployed into 750 stores after a successful pilot launch.',
          },
        ],
      },
    ],
  },
  skills: skillsConfig,
  footer: {
    socialProfiles: [
      {
        id: 1,
        name: 'linkedIn',
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 2,
        name: 'github',
        icon: <GitHubIcon />,
        url: 'https://github.com/abhishekgangwar90',
      },
      {
        id: 3,
        name: 'instagram',
        icon: <InstagramIcon />,
        url: 'https://www.instagram.com/iam_abhishek25/',
      },
      {
        id: 4,
        name: 'facebook',
        icon: <FacebookIcon />,
        url: 'https://www.facebook.com/AbhishekGangwar2558',
      },
    ],
  },
};