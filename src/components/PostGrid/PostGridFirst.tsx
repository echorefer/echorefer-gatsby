import React from 'react';
import { Stack, Grid } from '@mui/material';

import PostCard from '../PostCard/PostCard';

const PostGridFirst = ({ posts }) => {
  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
      <Grid item lg={8}>
        <Stack>
          <PostCard variant="bigHorizontal" post={posts[0]} />
          <PostCard variant="bigHorizontal" post={posts[1]} />
        </Stack>
      </Grid>
      <Grid item lg={4} sx={{ alignItems: 'stretch' }}>
        <PostCard variant="bigVertical" post={posts[2]} />
      </Grid>
    </Grid>
  );
};

export default PostGridFirst;
