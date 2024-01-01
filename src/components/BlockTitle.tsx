import React from 'react';
import { Box, Link, Chip, Typography } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';

interface BlockTitleProps {
  title: string;
  url?: string;
}

const BlockTitle = ({ title, url }: BlockTitleProps) => {
  return (
    <Box
      sx={{
        borderLeft: '5px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'primary.main',
        borderRadius: 2,
        pl: 4,
        py: 2,
        mx: 1,
        mb: 2,
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '1px 1px 5px 0 rgba(1,1,1,.05)',
      }}
    >
      <Box>
        {url ? (
          <Link
            component={GatsbyLink}
            to={url}
            sx={{
              marginTop: 'auto',
              fontSize: '1.5rem',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#2d3748',
            }}
          >
            {title}
          </Link>
        ) : (
          <Typography
            component="span"
            sx={{
              marginTop: 'auto',
              fontSize: '1.5rem',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#2d3748',
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
      {url && (
        <Box sx={{ pr: 4 }}>
          <Chip
            label="View More"
            clickable
            component={Link}
            href={url}
            sx={{
              color: '#2d3748',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default BlockTitle;
