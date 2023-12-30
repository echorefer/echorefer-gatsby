import React from 'react';
import { Container } from '@mui/material';

import PostGrid from './PostGrid/PostGrid';
import BlockTitle from './BlockTitle';

import type { PostGridVariants } from './PostGrid/interface';

interface CategoryBlockProps {
  postGridVariant: PostGridVariants;
}

const CategoryBlock = ({ category, postGridVariant }: CategoryBlockProps) => {
  const { posts } = category.node;

  return (
    <section>
      <Container sx={{ pb: 8 }}>
        <BlockTitle title={category.node.name} url={category.node.uri} />
        <PostGrid posts={posts.nodes} variant={postGridVariant} />
      </Container>
    </section>
  );
};

export default CategoryBlock;
