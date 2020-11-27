/* eslint-disable import/prefer-default-export */
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import IconStackOverFlow from '../../atoms/IconStackoverflow';
import { skillsConfig } from './skills-config';
import { experienceConfig } from './experience-config';

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
        icon: <IconStackOverFlow />,
        color: 'primary',
        url: 'https://stackoverflow.com/users/9269538/abhishek-gangwar',
      },
      {
        id: 2,
        name: 'linkedIn',
        tooltip: 'LinkedIn',
        icon: <LinkedInIcon style={{ fontSize: '3.5rem' }} />,
        color: 'primary',
        url: 'https://www.linkedin.com/in/abhishek-gangwar-47899b102/',
      },
      {
        id: 3,
        name: 'github',
        tooltip: 'Github',
        icon: <GitHubIcon style={{ fontSize: '3rem' }} />,
        color: 'primary',
        url: 'https://github.com/abhishekgangwar60',
      },
      {
        id: 4,
        name: 'mail',
        tooltip: 'Email',
        icon: <MailOutlineIcon style={{ fontSize: '3.5rem' }} />,
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
