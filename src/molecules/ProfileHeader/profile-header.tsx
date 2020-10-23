import React from 'react';
import { AppBar, Container, CssBaseline, Toolbar } from '@material-ui/core';
import { Link } from 'react-scroll';
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
        <Link
          to={elm.targetId}
          spy
          smooth
          offset={-70}
          duration={800}
          key={elm.id}
          className={classes.link}
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
