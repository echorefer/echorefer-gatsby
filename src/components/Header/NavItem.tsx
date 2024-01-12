import React from 'react';
import { Box, Link } from '@mui/material';

const NavItem = ({ item, LinkComponent }) => {
  return (
    <Box sx={{ mx: 1, px: 0.5 }} key={item.label}>
      <Link
        component={LinkComponent}
        to={item.url}
        sx={{ fontSize: '1rem', fontWeight: 700, color: '#718096' }}
      >
        {item.label}
      </Link>
    </Box>
  );
};

export default NavItem;
