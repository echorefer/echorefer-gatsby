import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import { categoryColors } from '../../utils/config';
import PostCardCover from './PostCardCover';
import PostCardSmall from './PostCardSmall';
import PostCardBigH from './PostCardBigH';
import PostCardBigV from './PostCardBigV';

import type { PostCardProps } from './interface';

//TODO: All PostCard components could use some style tiding
const PostCard = ({ variant, post }: PostCardProps) => {
  const { featuredImage, author } = post;
  const postCardImage =
    variant === 'bigHorizontal' || variant === 'bigVertical'
      ? getImage(featuredImage.node.localFile.childImageSharp.cardImageBig)
      : getImage(featuredImage.node.localFile.childImageSharp.cardImageCover);
  const imageCoverAlt = featuredImage.node.altText;
  const authorName = `${author.node.firstName} ${author.node.lastName}`;
  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const category = post.categories.nodes[0].name;
  const categoryUri = post.categories.nodes[0].uri;
  const chipColor = categoryColors[category] || '#000000';

  const components = {
    cover: (
      <PostCardCover
        uri={post.uri}
        title={post.title}
        image={postCardImage}
        alt={imageCoverAlt}
        date={formattedDate}
        avatarUrl={author.url}
        author={authorName}
      />
    ),
    small: (
      <PostCardSmall
        uri={post.uri}
        title={post.title}
        image={postCardImage}
        alt={imageCoverAlt}
        chipColor={chipColor}
        category={category}
        categoryUri={categoryUri}
        date={formattedDate}
        author={authorName}
      />
    ),
    smallNoChip: (
      <PostCardSmall
        uri={post.uri}
        title={post.title}
        image={postCardImage}
        alt={imageCoverAlt}
        chipColor={chipColor}
        category={category}
        categoryUri={categoryUri}
        date={formattedDate}
        author={authorName}
        showCategory={false}
      />
    ),
    smallNoImage: (
      <PostCardSmall
        uri={post.uri}
        title={post.title}
        image={postCardImage}
        alt={imageCoverAlt}
        chipColor={chipColor}
        category={category}
        categoryUri={categoryUri}
        date={formattedDate}
        author={authorName}
        showCategory={false}
        showImage={false}
      />
    ),
    bigHorizontal: (
      <PostCardBigH
        uri={post.uri}
        title={post.title}
        excerpt={post.excerpt}
        image={postCardImage}
        alt={imageCoverAlt}
        chipColor={chipColor}
        category={category}
        categoryUri={categoryUri}
        date={formattedDate}
        avatarUrl={author.url}
        author={authorName}
      />
    ),
    bigVertical: (
      <PostCardBigV
        post={post}
        uri={post.uri}
        title={post.title}
        excerpt={post.excerpt}
        image={postCardImage}
        alt={imageCoverAlt}
        chipColor={chipColor}
        category={category}
        categoryUri={categoryUri}
        date={formattedDate}
        avatarUrl={author.url}
        author={authorName}
      />
    ),
  };

  return components[variant] || null;
};

export default PostCard;
