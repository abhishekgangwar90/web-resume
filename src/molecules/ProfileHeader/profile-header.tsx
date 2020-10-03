import React, { Suspense } from 'react';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Toolbar,
} from '@material-ui/core';
import ElevationScroll from './profile-elevation-scroll';
import { useStyles } from './profile-header-styles';

const ProfileHeaderTitle = React.lazy(() => import('./profile-header-title'));

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
  targetId: string;
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

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    return element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderToolBarButtons = () => {
    return headerConfig.navOptions.map((elm) => {
      return (
        <Button
          variant="text"
          className={classes.button}
          key={elm.id}
          onClick={() => handleNavClick(elm.targetId)}
        >
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
              <Suspense fallback={<div />}>
                <ProfileHeaderTitle
                  title={headerConfig.title}
                  navOptions={headerConfig.navOptions}
                />
              </Suspense>
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
