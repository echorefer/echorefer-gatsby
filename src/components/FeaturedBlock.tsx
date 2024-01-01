import React from 'react';
import { Container } from '@mui/material';

import BlockTitle from './BlockTitle';
import PostGrid from './PostGrid/PostGrid';

const FeaturedBlock = ({ posts }) => {
  return (
    <section>
      <Container sx={{ py: 8 }}>
        <BlockTitle title="Editor Suggestions" />
        <PostGrid posts={posts.nodes} variant="featured" />
      </Container>
    </section>
  );
};

export default FeaturedBlock;
