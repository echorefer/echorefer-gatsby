import React from 'react';
import { Box, Chip, Link, Typography, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import type { PostCardBigProps } from './interface';

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
`;

const PostCardBigV = ({
  uri,
  title,
  excerpt,
  image,
  alt,
  chipColor,
  category,
  categoryUri,
  date,
  avatarUrl,
  author,
}: PostCardBigProps) => (
  <Box sx={{ padding: 1 }}>
    <Box
      component="article"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 'rgba(1, 1, 1, 0.05) 1px 1px 5px',
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          mt: 1,
          mx: 1,
        }}
      >
        <StyledGatsbyImage image={image} alt={alt} />
      </Box>

      <Box
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '60%',
          flexGrow: 0,
        }}
      >
        <Box sx={{ pb: 2 }}>
          <Chip
            label={category}
            component={Link}
            href={categoryUri}
            clickable
            sx={{
              backgroundColor: chipColor,
              color: '#2d3748',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          />
        </Box>
        <Box sx={{ pb: 2 }}>
          <Link
            component={GatsbyLink}
            to={`${uri}`}
            sx={{
              marginTop: 'auto',
              fontSize: '1.25rem',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#2d3748',
            }}
          >
            {title}
          </Link>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: '#718096',
            }}
          >
            {excerpt}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 'auto' }}>
          <Box>
            <Avatar alt={`${author}'s avatar`} src={avatarUrl} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: 2,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#718096',
              }}
            >
              {author}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '0.875rem',
                color: '#a0aec0',
              }}
            >
              {date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default PostCardBigV;
