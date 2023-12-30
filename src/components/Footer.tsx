import React from 'react';
import { Stack, Box, Container, Divider, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';

import NavItem from './NavItem';

const Footer = () => {
  const data: Queries.FooterQuery = useStaticQuery(graphql`
    query Footer {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  `);

  const {
    wpMenu: {
      menuItems: { nodes },
    },
  } = data;

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
            {nodes.map((item) => (
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
