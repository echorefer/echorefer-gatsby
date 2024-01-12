import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';

import NavItem from '../Header/NavItem';
import FooterNav from './FooterNav';

const Footer = () => {
  const { menu } = useStaticQuery<Queries.FooterMenuQuery>(graphql`
    query FooterMenu {
      menu: strapiMenu(name: { eq: "Header Menu" }) {
        id
        menu_items {
          label
          url
        }
      }
    }
  `);

  const { menu_items } = menu;

  return (
    <Box sx={{ background: 'white' }}>
      <Container>
        <footer>
          <Grid container spacing={2} sx={{ py: 8 }}>
            <Grid item lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Link component={GatsbyLink} to="/">
                    <StaticImage
                      src="../../assets/images/logo-light.png"
                      alt="logo"
                    />
                  </Link>
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    component="span"
                    sx={{ fontSize: '1rem', fontWeight: 400, color: '#718096' }}
                  >
                    &copy; {new Date().getFullYear()}, All right reserved
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <FooterNav title="Useful links" />
            </Grid>
            <Grid item lg={4}>
              <FooterNav title="Social media" />
            </Grid>
          </Grid>
        </footer>
      </Container>
    </Box>
  );
};

export default Footer;
