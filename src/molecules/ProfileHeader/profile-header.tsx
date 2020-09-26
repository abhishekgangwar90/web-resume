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
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar>
              <Typography variant="h5">{headerConfig.title}</Typography>
              <Button variant="text" color="secondary">
                Home
              </Button>
              <Button variant="text" color="secondary">
                Home
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </>
  );
};

export default ProfileHeader;
