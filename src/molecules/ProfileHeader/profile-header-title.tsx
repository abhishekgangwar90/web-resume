import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-scroll';

import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './profile-header-styles';

type Props = {
  title: string;
  navOptions: Array<any>;
};

const ProfileHeaderTitle: React.FunctionComponent<Props> = ({
  title,
  navOptions,
}: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const renderDrawerMenuOptions = () => {
    return (
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>
            Abhishek Gangwar
          </ListSubheader>
        }
      >
        {navOptions.map((elm) => {
          return (
            <ListItem key={elm.id}>
              <Link
                to={elm.targetId}
                spy
                smooth
                offset={-70}
                duration={800}
                key={elm.id}
                className={classes.link}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={elm.title} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div className={classes.toolbarTitle}>
      <div className={classes.customIconButton}>AG</div>
      {/* <IconButton
        color="primary"
        className={classes.iconButton}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          {renderDrawerMenuOptions()}
        </SwipeableDrawer>
      </> */}
      <Typography variant="h5">{title}</Typography>
    </div>
  );
};

export default ProfileHeaderTitle;
