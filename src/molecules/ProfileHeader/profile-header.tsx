import React from 'react';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ElevationScroll from './profile-elevation-scroll';
import { useStyles } from './profile-header-styles';

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
          <Container>
            <Toolbar className={classes.noPadding}>
              <div className={classes.toolbarTitle}>
                <div className={classes.iconButton}>AG</div>
                <Typography variant="h5">{headerConfig.title}</Typography>
              </div>
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
