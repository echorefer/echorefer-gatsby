import React from 'react';
import { Stack } from '@mui/material';

import PostCard from '../PostCard/PostCard';

const PostGridFeatured = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const postsToShow = posts.slice(0, 9);
  const rows = Math.ceil(postsToShow.length / 3);
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <Stack key={i} direction="row" spacing={2}>
          {postsToShow.slice(i * 3, i * 3 + 3).map((post) => (
            <PostCard
              key={post.slug}
              variant={i !== 1 ? 'cover' : 'small'}
              post={post}
            />
          ))}
        </Stack>
      ))}
    </>
  );
};

export default PostGridFeatured;
