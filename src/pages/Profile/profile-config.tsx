/* eslint-disable import/prefer-default-export */
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
      },
      {
        id: 2,
        name: 'experience',
        title: 'Experience',
      },
      {
        id: 3,
        name: 'skills',
        title: 'Skills',
      },
      {
        id: 4,
        name: 'contact',
        title: 'Contact',
      },
    ],
  },
  about: {
    name: 'Abhishek Gangwar',
    title: 'Front-end Developer',
    aboutMe: `Results-oriented software engineering professional with 4 years of expertise in building secure applications. An excellent collaborator with a cheerful outlook seeking a role in building Web and mobile applications for a well-established software company.`,
    actions: [
      {
        id: 1,
        icon: '',
        variant: 'outlined',
        color: 'primary',
        name: 'StackOverFlow',
        url: '',
      },
      {
        id: 2,
        icon: <LinkedInIcon fontSize="large" />,
        variant: 'contained',
        color: 'primary',
        name: 'LinkedIn',
        url: '',
      },
    ],
  },
};
