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

  console.log('PostCard featuredImage', featuredImage);
  console.log('PostCard author.url', author.url);

  const postCardImage =
    variant === 'bigHorizontal' || variant === 'bigVertical'
      ? getImage(featuredImage.localFile.childImageSharp.cardImageBig)
      : getImage(featuredImage.localFile.childImageSharp.cardImageCover);

  // TODO: Find how strapi and graphQl manage images alt and caption
  // const imageCoverAlt = featuredImage.node.altText;
  const imageCoverAlt = 'Placeholder';
  const authorName = `${author.firstName} ${author.lastName}`;
  const formattedDate = new Date(post.createdAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const category = post.categories[0].name;
  const categoryUri = post.categories[0].slug;
  const chipColor = categoryColors[category] || '#000000';
  const postUri = `/${post.slug}`;
  const components = {
    cover: (
      <PostCardCover
        uri={postUri}
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
        uri={postUri}
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
        uri={postUri}
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
        uri={postUri}
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
        uri={postUri}
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
        uri={postUri}
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
