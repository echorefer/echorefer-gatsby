import React from 'react';
import { Stack, Box, Container, Divider, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';

import NavItem from './Header/NavItem';

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
    <Container maxWidth="lg">
      <footer>
        <Stack direction="column" alignItems="center" spacing={3}>
          <Box>
            <StaticImage src="../assets/images/logo.png" alt="logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {menu_items.map((item) => (
              <NavItem
                item={item}
                LinkComponent={GatsbyLink}
                key={item.label}
              />
            ))}
          </Box>
        </Stack>
        <Divider sx={{ my: 5 }} />
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          sx={{ pb: 10 }}
        >
          <Typography variant="body1">
            Copyright Referral Project {new Date().getFullYear()}
          </Typography>
        </Stack>
      </footer>
    </Container>
  );
};

export default Footer;
