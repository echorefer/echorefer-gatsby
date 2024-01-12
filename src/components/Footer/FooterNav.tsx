import React from 'react';
import { Typography } from '@mui/material';

interface FooterNavProps {
  title: string;
}

const FooterNav = ({ title }: FooterNavProps) => {
  return (
    <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#2d3748' }}>
      {title}
    </Typography>
  );
};

export default FooterNav;
