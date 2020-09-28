import React from 'react';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ElevationScroll from './profile-elevation-scroll';
import { useStyles } from './profile-header-styles';
import ProfileHeaderTitle from './profile-header-title';

type Props = {
  headerConfig: {
    title: string;
    navOptions: Array<navigationOption>;
  };
};

type navigationOption = {
  id: number;
  name: string;
  title: string;
  // link: string;
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
  const classes = useStyles();

  const renderToolBarButtons = () => {
    return headerConfig.navOptions.map((elm) => {
      return (
        <Button variant="text" className={classes.button} key={elm.id}>
          {elm.title}
        </Button>
      );
    });
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Container className={classes.toolBarContainer}>
            <Toolbar className={classes.noPadding}>
              <ProfileHeaderTitle
                title={headerConfig.title}
                navOptions={headerConfig.navOptions}
              />
              <div className={classes.toolbarActions}>
                {renderToolBarButtons()}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </>
  );
};

export default ProfileHeader;
