import { makeStyles } from '@material-ui/core';
import React from 'react';
import Profile from '../../assets/images/profilePic.jpg';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: 'calc(18rem + 5vmin)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.between('sm', 'md')]: {
      height: 'calc(25rem + 10vmin)',
      padding: '5px',
    },

    [theme.breakpoints.up('md')]: {
      height: 'calc(22rem + 10vmin)',
    },

    [theme.breakpoints.up('lg')]: {
      height: 'calc(25rem + 10vmin)',
    },

    '& img': {
      borderRadius: '50%',
      height: 'calc(16rem + 5vmin)',
      width: 'calc(16rem + 5vmin)',

      [theme.breakpoints.up('sm')]: {
        height: 'calc(14rem + 10vmin)',
        width: 'calc(14rem + 10vmin)',
      },

      [theme.breakpoints.up('md')]: {
        height: 'calc(20rem + 10vmin)',
        width: 'calc(20rem + 10vmin)',
      },

      [theme.breakpoints.up('lg')]: {
        height: 'calc(22rem + 10vmin)',
        width: 'calc(22rem + 10vmin)',
      },
    },
  },
}));

const ProfilePic: React.FunctionComponent<any> = () => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <img src={Profile} alt="profile" />
    </div>
  );
};

export default ProfilePic;
