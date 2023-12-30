import React from 'react';
import { Stack, Grid } from '@mui/material';

import PostCard from '../PostCard/PostCard';

const PostGridSecond = ({ posts }) => {
  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
      <Grid item lg={8}>
        <Stack>
          <PostCard variant="bigHorizontal" post={posts[0]} />
          <Stack direction="row">
            <PostCard variant="smallNoChip" post={posts[1]} />
            <PostCard variant="smallNoChip" post={posts[2]} />
          </Stack>
          <Stack direction="row">
            <PostCard variant="smallNoChip" post={posts[3]} />
            <PostCard variant="smallNoChip" post={posts[4]} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item lg={4} sx={{ alignItems: 'stretch' }}>
        <PostCard variant="bigVertical" post={posts[5]} />
      </Grid>
    </Grid>
  );
};

export default PostGridSecond;
