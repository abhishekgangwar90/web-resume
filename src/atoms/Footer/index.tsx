import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FooterContainer } from './footer-styles';

const Footer: React.FunctionComponent<any> = () => {
  const d = new Date();
  return (
    <FooterContainer>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="body2">
              @{d.getUTCFullYear()} Abhishek Gangwar
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2">
              Follow me <LinkedInIcon />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
