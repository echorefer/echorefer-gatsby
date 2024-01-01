import React from 'react';
import { Box, Link, Typography, Chip } from '@mui/material';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import type { PostCardSmallProps } from './interface';

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
`;

const PostCardSmall = ({
  uri,
  title,
  image,
  alt,
  chipColor,
  category,
  categoryUri,
  date,
  author,
  showCategory = true,
  showImage = true,
}: PostCardSmallProps) => (
  <Box sx={{ padding: 1, flexBasis: 0, flexGrow: 1 }}>
    <Box
      sx={{
        height: '100%',
        borderRadius: 4,
        boxShadow: '1px 1px 5px 0 rgba(1,1,1,.05)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          borderLeftStyle: 'solid',
          borderLeftWidth: '5px',
          borderLeftColor: 'primary.main',
          overflow: 'hidden',
          background: 'white',
        }}
        component="article"
      >
        {showImage && (
          <Box
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              flexBasis: 0,
              flexGrow: 1,
              ml: 1,
              my: 1,
            }}
          >
            <StyledGatsbyImage image={image} alt={alt} />
          </Box>
        )}

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            flexBasis: 0,
            flexGrow: 2,
          }}
        >
          {showCategory && (
            <Box sx={{ pb: 1 }}>
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
          )}

          <Link
            component={GatsbyLink}
            to={`${uri}`}
            sx={{ fontWeight: 600, color: '#2d3748' }}
          >
            {title}
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: showImage ? 'column' : 'row',
              justifyContent: 'space-between',
              pt: 1,
              marginTop: 'auto',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#718096',
              }}
            >
              {author}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '0.75rem',
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

export default PostCardSmall;
