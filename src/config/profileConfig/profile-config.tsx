/* eslint-disable import/prefer-default-export */
import React from 'react';

import { skillsConfig } from './skills-config';
import { experienceConfig } from './experience-config';
import IconComponent from '../../atoms/IconComponent';
import IconLinkedIn from '../../atoms/IconLinkedIn';
import IconGithub from '../../atoms/IconGithub';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const careerStartDate = new Date('10/03/2016');
const currentDate = new Date();
const experience =
  currentDate.getUTCFullYear() - careerStartDate.getUTCFullYear();

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
        targetId: 'about',
      },
      {
        id: 2,
        offset: 0,
        name: 'experience',
        title: 'Experience',
        targetId: 'experience',
      },
      {
        id: 3,
        offset: -120,
        name: 'skills',
        title: 'Skills',
        targetId: 'skills',
      },
      {
        id: 4,
        offset: 0,
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
    aboutMe: `Results-oriented software engineering professional with ${experience} years of expertise in building secure applications. An excellent collaborator with a cheerful outlook who is always willing to learn new things and take on new challenges.`,
    actions: [
      {
        id: 1,
        tooltip: 'Stack Overflow',
        name: 'stackOverFlow',
        icon: <IconComponent size="lg" icon={faStackOverflow} />,
        color: 'primary',
        url: 'https://stackoverflow.com/users/9269538/abhishek-gangwar',
      },
      {
        id: 2,
        name: 'linkedIn',
        tooltip: 'LinkedIn',
        icon: <IconComponent size="lg" icon={faLinkedin} />,
        color: 'primary',
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 3,
        name: 'github',
        tooltip: 'Github',
        icon: <IconComponent size="lg" icon={faGithub} />,
        color: 'primary',
        url: 'https://github.com/abhishekgangwar60',
      },
      {
        id: 4,
        name: 'mail',
        tooltip: 'Email',
        icon: <IconComponent size="lg" icon={faEnvelope} />,
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
        icon: <IconLinkedIn />,
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 2,
        name: 'github',
        icon: <IconGithub />,
        url: 'https://github.com/abhishekgangwar90',
      },
      {
        id: 3,
        name: 'instagram',
        icon: <IconGithub />,
        url: 'https://www.instagram.com/iam_abhishek25/',
      },
      {
        id: 4,
        name: 'facebook',
        icon: <IconGithub />,
        url: 'https://www.facebook.com/AbhishekGangwar2558',
      },
    ],
  },
};
