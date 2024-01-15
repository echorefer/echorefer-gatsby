import { Stack } from '@mui/material';
import React from 'react';
import PostCard from '../PostCard/PostCard';

const PostGridRelated = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const postsToShow = posts.slice(0, 6);
  const rows = Math.ceil(postsToShow.length / 2);

  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <Stack key={i} direction="row" spacing={2}>
          {postsToShow.slice(i * 2, i * 2 + 2).map((post) => (
            <PostCard key={post.slug} variant="small" post={post} />
          ))}
        </Stack>
      ))}
    </>
  );
};

export default PostGridRelated;
