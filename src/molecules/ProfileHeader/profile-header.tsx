import React from 'react';
import {
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
  Toolbar,
} from '@material-ui/core';
import { Link } from 'react-scroll';
import ElevationScroll from './profile-elevation-scroll';
import './profile-header-styles.scss';

type Props = {
  headerConfig: {
    title: string;
    navOptions: Array<navigationOption>;
  };
};

type navigationOption = {
  id: number;
  offset: number;
  icon: any;
  name: string;
  title: string;
  targetId: string;
};

const defaultProps: Props = {
  headerConfig: {
    title: 'Default',
    navOptions: [],
  },
};

const ProfileHeader: React.FunctionComponent<Props> = ({
  headerConfig = defaultProps.headerConfig,
}: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClick = () => {
    setOpen(true);
  };

  const renderDrawerMenuOptions = () => {
    return (
      <List
        subheader={
          <ListSubheader>
            <h2>Abhishek Gangwar</h2>
          </ListSubheader>
        }
      >
        {headerConfig.navOptions.map((elm) => {
          return (
            <ListItem button key={elm.id}>
              <ListItemIcon>{elm.icon}</ListItemIcon>
              <ListItemText primary={elm.title} />
            </ListItem>
          );
        })}
      </List>
    );
  };

  const renderToolBarButtons = () => {
    return headerConfig.navOptions.map((elm) => {
      return (
        <Link
          to={elm.targetId}
          spy
          smooth
          offset={elm.offset || 0}
          duration={800}
          key={elm.id}
          className="nav-link"
        >
          {elm.title}
        </Link>
      );
    });
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <header className="app-header">
          <div className="header-details">
            <button
              type="button"
              className="icon-button"
              onClick={handleDrawerClick}
            >
              AG
            </button>
            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              className="drawer"
            >
              {renderDrawerMenuOptions()}
            </SwipeableDrawer>
            <h1>{headerConfig.title}</h1>
          </div>
          <nav>{renderToolBarButtons()}</nav>
        </header>
      </ElevationScroll>
      <Toolbar className="app-toolbar" />
    </>
  );
};

export default ProfileHeader;
