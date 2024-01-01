import React from 'react';

import PostGridFeatured from './PostGridFeatured';
import PostGridFirst from './PostGridFirst';
import PostGridSecond from './PostGridSecond';

import type { PostGridProps } from './interface';

const PostGrid = ({ posts, variant }: PostGridProps) => {
  const components = {
    featured: <PostGridFeatured posts={posts} />,
    first: <PostGridFirst posts={posts} />,
    second: <PostGridSecond posts={posts} />,
  };

  return components[variant] || null;
};

export default PostGrid;
