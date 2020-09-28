/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.secondary.main,
    padding: 'calc(12px + 2vmin)',
    color: theme.palette.text.primary,
  },
  toolBarContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  noPadding: {
    padding: '0 !important',
  },
  toolbar: {
    marginTop: 'calc(32px + 2vmin)',
  },
  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
  },
  customIconButton: {
    height: '45px',
    width: '45px',
    borderRadius: '50%',
    fontSize: 'calc(4px + 2vmin)',
    backgroundColor: theme.palette.primary.main,
    marginRight: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  iconButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex',
      paddingLeft: '0',
    },
  },
  toolbarActions: {
    display: 'none',
    flex: '1',
    justifyContent: 'space-around',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  button: {
    fontFamily: 'Merriweather-Medium',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: '#fff !important',
    },
  },
}));
