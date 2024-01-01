import React from 'react';
import { Grid, Typography } from '@mui/material';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard/PostCard';

const CategoryPage = ({ data }) => {
  console.log(data);

  const category = data.wpCategory;
  const posts = category.posts.nodes;

  if (!category) {
    return (
      <Layout>
        <p>Category not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <Typography variant="h2" align="center">
          {category.name}
        </Typography>
        <Grid container spacing={2}>
          {posts.slice(0, 2).map((post) => (
            <Grid item lg={6} sm={12} key={post.title}>
              <PostCard post={post} variant="bigVertical" />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {posts.slice(2).map((post) => (
            <Grid item lg={4} sm={6} key={post.title}>
              <PostCard post={post} variant="bigVertical" />
            </Grid>
          ))}
        </Grid>
      </section>
    </Layout>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    wpCategory(id: { eq: $id }) {
      name
      posts {
        nodes {
          title
          uri
          excerpt
          author {
            node {
              firstName
            }
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  cardImageCover: gatsbyImageData(
                    width: 360
                    aspectRatio: 0.76
                    layout: CONSTRAINED
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
                  cardImageBig: gatsbyImageData(
                    width: 380
                    aspectRatio: 1.3
                    layout: CONSTRAINED
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
                }
              }
            }
          }
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
    }
  }
`;
