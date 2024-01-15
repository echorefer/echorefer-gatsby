import React from 'react';
import { Container } from '@mui/material';

import PostGrid from './PostGrid/PostGrid';
import BlockTitle from './BlockTitle';

import type { PostGridVariants } from './PostGrid/interface';

interface CategoryBlockProps {
  postGridVariant: PostGridVariants;
}

const CategoryBlock = ({ category, postGridVariant }: CategoryBlockProps) => {
  const { posts } = category;
  const uri = `/${category.slug}`;

  if (!posts || posts.length === 0) return null;
  return (
    <section>
      <Container sx={{ pb: 8 }}>
        <BlockTitle title={category.name} uri={uri} />
        <PostGrid posts={posts} variant={postGridVariant} />
      </Container>
    </section>
  );
};

export default CategoryBlock;
