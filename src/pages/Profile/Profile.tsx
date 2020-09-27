import React from 'react';
import { Box, Button, Container } from '@material-ui/core';

import ProfileHeader from '../../molecules/ProfileHeader';
import { useStyles } from './profile-styles';
import { ProfileConfig } from './profile-config';

interface Props {
  history: any;
  location: any;
  match: any;
}

const Profile: React.FunctionComponent<Props> = ({
  history,
  location,
  match,
}: Props) => {
  const classes = useStyles();
  const config = ProfileConfig;
  return (
    <div className={classes.container}>
      <ProfileHeader headerConfig={config.header} />

      <Container>
        <Box my={2}>
          <Button variant="contained" color="primary">
            Home
          </Button>
          <Button
            style={{
              backgroundColor: '#0073b1',
              color: '#fff',
            }}
          >
            Home
          </Button>
          <Button
            style={{
              backgroundColor: '#0091ca',
              color: '#fff',
            }}
          >
            Home
          </Button>
          <Button
            style={{
              backgroundColor: 'rgb(37,36,34,1)',
              color: '#fff',
            }}
          >
            Home
          </Button>
          {[...new Array(40)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
