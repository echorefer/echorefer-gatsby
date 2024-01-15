import React from 'react';
import { Container } from '@mui/material';

import BlockTitle from './BlockTitle';
import PostGrid from './PostGrid/PostGrid';

import type { PostGridVariants } from './PostGrid/interface';

interface RelatedBlockProps {
  postGridVariant: PostGridVariants;
}

const RelatedBlock = ({ posts, postGridVariant }: RelatedBlockProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <Container sx={{ pb: 8 }}>
        <BlockTitle title="Related Posts" />
        <PostGrid posts={posts} variant={postGridVariant} />
      </Container>
    </section>
  );
};

export default RelatedBlock;
