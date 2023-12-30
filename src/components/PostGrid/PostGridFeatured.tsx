import React from 'react';
import { Stack } from '@mui/material';

import PostCard from '../PostCard/PostCard';

const PostGridFeatured = ({ posts }) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <PostCard variant="cover" post={posts[0]} />
        <PostCard variant="cover" post={posts[1]} />
        <PostCard variant="cover" post={posts[2]} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <PostCard variant="small" post={posts[3]} />
        <PostCard variant="small" post={posts[4]} />
        <PostCard variant="small" post={posts[5]} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <PostCard variant="small" post={posts[6]} />
        <PostCard variant="small" post={posts[7]} />
        <PostCard variant="small" post={posts[8]} />
      </Stack>
    </>
  );
};

export default PostGridFeatured;
