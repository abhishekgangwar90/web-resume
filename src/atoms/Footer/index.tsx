import React from 'react';
import { Grid, Container, Typography, IconButton } from '@material-ui/core';

import { FooterContainer, useStyles } from './footer-styles';

type Props = {
  footerConfig: {
    socialProfiles: Array<socialProfile>;
  };
};

type socialProfile = {
  id: number;
  name: string;
  icon: any;
  url: string;
};

const Footer: React.FunctionComponent<Props> = ({ footerConfig }: Props) => {
  const classes = useStyles();
  const d = new Date();
  const { socialProfiles } = footerConfig;

  const handleSocialLinkClick = (url: string) => {
    window.open(url);
  };

  const renderSocialProfileIcons = () => {
    return (
      <div>
        {socialProfiles.map((elm) => {
          return (
            <IconButton
              name={elm.name}
              aria-label={elm.name}
              color="secondary"
              key={elm.id}
              onClick={() => handleSocialLinkClick(elm.url)}
            >
              {elm.icon}
            </IconButton>
          );
        })}
      </div>
    );
  };

  return (
    <FooterContainer>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className={classes.footerText}>
              @{d.getUTCFullYear()} Abhishek Gangwar
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2">
              Connect with me on Social Media
            </Typography>
            {renderSocialProfileIcons()}
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
