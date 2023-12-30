import React from 'react';
import { Box, Link } from '@mui/material';

const NavItem = ({ item, LinkComponent }) => {
  return (
    <Box sx={{ mx: 3 }} key={item.label}>
      <Link component={LinkComponent} to={item.url}>
        {item.label}
      </Link>
    </Box>
  );
};

export default NavItem;
