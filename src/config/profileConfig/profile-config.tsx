/* eslint-disable import/prefer-default-export */
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';

import { skillsConfig } from './skills-config';
import { experienceConfig } from './experience-config';
import { getTotalExperience } from '../../utils/app.utils';

export const ProfileConfig = {
  id: 'profile',
  title: 'Profile',
  header: {
    title: 'Abhishek Gangwar',
    navOptions: [
      {
        id: 1,
        offset: -120,
        name: 'home',
        title: 'Home',
        icon: <HomeIcon />,
        targetId: 'about',
      },
      {
        id: 2,
        offset: 0,
        name: 'experience',
        title: 'Experience',
        icon: <WorkIcon />,
        targetId: 'experience',
      },
      {
        id: 3,
        offset: -120,
        name: 'skills',
        title: 'Skills',
        icon: <BuildIcon />,
        targetId: 'skills',
      },
      {
        id: 4,
        offset: 0,
        name: 'contact',
        title: 'Contact',
        icon: <PhoneIcon />,
        targetId: 'contact',
      },
    ],
  },
  about: {
    name: 'Abhishek Gangwar',
    title: 'Front-end Developer',
    location: 'Gurugram, India',
    aboutMe: `Results-oriented software engineering professional with ${getTotalExperience()} years of expertise in building secure applications. An excellent collaborator with a cheerful outlook who is always willing to learn new things and take on new challenges.`,
    actions: [
      {
        id: 1,
        tooltip: 'Stack Overflow',
        name: 'stackOverFlow',
        icon: <GitHubIcon fontSize="large" />,
        color: 'primary',
        url: 'https://stackoverflow.com/users/9269538/abhishek-gangwar',
      },
      {
        id: 2,
        name: 'linkedIn',
        tooltip: 'LinkedIn',
        icon: <LinkedInIcon fontSize="large" />,
        color: 'primary',
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 3,
        name: 'github',
        tooltip: 'Github',
        icon: <GitHubIcon fontSize="large" />,
        color: 'primary',
        url: 'https://github.com/abhishekgangwar60',
      },
      {
        id: 4,
        name: 'mail',
        tooltip: 'Email',
        icon: <EmailIcon fontSize="large" />,
        color: 'primary',
        variant: 'contained',
        url: 'mailto:me.abhishekgangwar@gmail.com',
      },
    ],
  },
  experience: experienceConfig,
  skills: skillsConfig,
  footer: {
    socialProfiles: [
      {
        id: 1,
        name: 'linkedIn',
        icon: <EmailIcon />,
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 2,
        name: 'github',
        icon: <EmailIcon />,
        url: 'https://github.com/abhishekgangwar90',
      },
      {
        id: 3,
        name: 'instagram',
        icon: <EmailIcon />,
        url: 'https://www.instagram.com/iam_abhishek25/',
      },
      {
        id: 4,
        name: 'facebook',
        icon: <EmailIcon />,
        url: 'https://www.facebook.com/AbhishekGangwar2558',
      },
    ],
  },
};
