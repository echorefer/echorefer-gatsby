import React from 'react';
import { Typography, Container, Stack, Box, Link } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { Link as GatsbyLink, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard/PostCard';

import type { HeadFC, PageProps } from 'gatsby';

interface CategoryPageContextProps {
  id: number;
  name: string;
  description: string;
  count: number;
  uri: string;
  limit: number;
  skip: number;
  pageCount: number;
  currentPage: number;
}

const CategoryPage = ({
  data,
  pageContext,
}: PageProps<Queries.CategoryPageQuery, CategoryPageContextProps>) => {
  const { nodes } = data.posts;

  console.log('CategoryPage -> nodes', nodes);

  const { name, description, currentPage, pageCount, uri, count } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  const prevLink = !isFirst
    ? currentPage === 2
      ? uri
      : `${uri}/page/${currentPage - 1}`
    : '';
  const nextLink = !isLast ? `${uri}/page/${currentPage + 1}` : '';

  return (
    <Layout>
      <section>
        <Container sx={{ py: 8 }}>
          <Box sx={{ px: 1, mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                mb: 1,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Typography
                component="h1"
                sx={{ fontSize: '3rem', fontWeight: 900 }}
              >
                {name}
              </Typography>
              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: 'white',
                  px: 2,
                  py: 0.5,
                  ml: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'primary.main',
                  }}
                >
                  {count}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#718096',
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          <Stack
            spacing={1}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {nodes &&
              nodes.map((post) => (
                <PostCard key={post.title} post={post} variant="bigVertical" />
              ))}
          </Stack>

          {pageCount > 1 && (
            <Stack
              sx={{
                display: 'flex',
                maxWidth: '500px',
                mx: 'auto',
                mt: 8,
                backgroundColor: 'white',
                borderRadius: '999px',
              }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  flexBasis: 0,
                  flexGrow: 1,
                }}
              >
                {!isFirst && (
                  <Link
                    component={GatsbyLink}
                    to={prevLink}
                    sx={{
                      textAlign: 'center',
                      color: 'white',
                      borderRadius: '999px',
                      backgroundColor: '#718096',
                      px: 2,
                      py: 1,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      borderWidth: '3px',
                      lineHeight: '28.8px',
                    }}
                  >
                    <ChevronLeft />
                    Prev
                  </Link>
                )}
              </Box>
              <Box
                sx={{
                  flexBasis: 0,
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: '#718096',
                  }}
                >
                  Page <strong>{currentPage}</strong> of
                  <strong> {pageCount}</strong>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexBasis: 0,
                  flexGrow: 1,
                }}
              >
                {!isLast && (
                  <Link
                    component={GatsbyLink}
                    to={nextLink}
                    sx={{
                      textAlign: 'center',
                      color: 'white',
                      borderRadius: '999px',
                      backgroundColor: '#718096',
                      px: 2,
                      py: 1,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      borderWidth: '3px',
                      lineHeight: '28.8px',
                    }}
                  >
                    Next
                    <ChevronRight />
                  </Link>
                )}
              </Box>
            </Stack>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPage($id: String!, $limit: Int, $skip: Int) {
    posts: allStrapiPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        excerpt {
          data {
            excerpt
          }
        }
        featuredImage {
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
        author {
          firstName
          lastName
        }
        categories {
          name
          slug
        }
        createdAt
      }
    }
  }
`;

export const Head: HeadFC<
  Queries.CategoryPageQuery,
  CategoryPageContextProps
> = ({ pageContext }) => {
  const { name } = pageContext;

  return <title>Echorefer Gatsby | {name} Category</title>;
};
