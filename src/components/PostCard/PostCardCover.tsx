import React from 'react';
import { Link, Box, Avatar, Typography } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import type { PostCardCoverProps } from './interface';

const PostCardCover = ({
  uri,
  title,
  image,
  alt,
  date,
  avatarUrl,
  author,
}: PostCardCoverProps) => (
  <Box sx={{ padding: 1 }}>
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        borderRadius: 4,
        overflow: 'hidden',
      }}
      component="article"
    >
      <Box>
        <GatsbyImage image={image} alt={alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          padding: 4,
          background: 'linear-gradient(0deg, #2d3748 0%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link
          component={GatsbyLink}
          to={`${uri}`}
          sx={{
            marginTop: 'auto',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: '1.2',
            color: 'white',
          }}
        >
          {title}
        </Link>
        <Box sx={{ display: 'flex', pt: 2 }}>
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
                color: 'white',
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

export default PostCardCover;
