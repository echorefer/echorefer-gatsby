import React, { useState } from 'react';
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import NavItem from './NavItem';
import { Search, SearchIconWrapper, StyledInputBase } from './Search';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { menu } = useStaticQuery<Queries.HeaderMenuQuery>(graphql`
    query HeaderMenu {
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
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex', flexGrow: 1, flexBasis: 0 },
            }}
          >
            <Link component={GatsbyLink} to="/">
              <StaticImage
                src="../../assets/images/logo-light.png"
                alt="logo"
              />
            </Link>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box
            sx={{
              flexBasis: 0,
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'end' },
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

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Link component={GatsbyLink} to="/">
              <StaticImage src="../assets/images/logo.png" alt="logo" />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menu_items.map((item) => (
                <Link component={GatsbyLink} to={item.url} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
