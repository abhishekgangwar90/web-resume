/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.secondary.main,
    padding: 'calc(5px + 2vmin)',
    color: theme.palette.text.primary,
  },
  noPadding: {
    padding: '0 !important',
  },
  toolbar: {
    marginTop: 'calc(22px + 2vmin)',
  },
  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
  },
  iconButton: {
    height: '45px',
    width: '45px',
    borderRadius: '50%',
    fontSize: 'calc(4px + 2vmin)',
    backgroundColor: theme.palette.primary.main,
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
  toolbarActions: {
    display: 'flex',
    flex: '1',
    justifyContent: 'space-around',
  },
  button: {
    fontFamily: 'Merriweather-Medium',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: '#fff !important',
    },
  },
}));
