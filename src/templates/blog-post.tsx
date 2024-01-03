import React from 'react';
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

import Layout from '../components/Layout';

import type { PageProps } from 'gatsby';

const BlogPostTemplate = ({ data }: PageProps<Queries.BlogPostQuery>) => {
  const { previous, next, post } = data;
  const { title, date, content, author } = post;
  const articleImage = getImage(
    post?.featuredImage?.node?.localFile?.childImageSharp?.articleImage
  );
  const alText = post?.featuredImage?.node?.altText || ``;
  const formattedDate = new Date(date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const authorName = `${author.node.firstName} ${author.node.lastName}`;
  const category = post?.categories?.nodes[0].name || '';
  const uri = post?.categories?.nodes[0].uri || '';

  return (
    <Layout>
      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '1px 1px 5px 0 rgba(1,1,1,.05)',
          }}
        >
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              {articleImage && (
                <Box>
                  <GatsbyImage image={articleImage} alt={alText} />
                </Box>
              )}
              <Box sx={{ mt: 4, px: 8 }}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    mb: 2,
                    color: '#2d3748',
                  }}
                >
                  {parse(title)}
                </Typography>
                <Stack spacing={1} direction="row">
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1rem',
                        color: '#718096',
                        fontWeight: 400,
                      }}
                    >
                      By <strong>{authorName}</strong>
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    variant="inset"
                    sx={{ borderWidth: 1 }}
                    flexItem
                  />
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1rem',
                        color: '#718096',
                        fontWeight: 400,
                      }}
                    >
                      Published in{' '}
                      <Link
                        component={GatsbyLink}
                        to={uri}
                        sx={{
                          fontSize: '1rem',
                          color: '#718096',
                          fontWeight: 600,
                        }}
                      >
                        {category}
                      </Link>
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    variant="inset"
                    sx={{ borderWidth: 1 }}
                    flexItem
                  />
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1rem',
                        color: '#718096',
                        fontWeight: 400,
                      }}
                    >
                      {formattedDate}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </header>

            <Divider
              sx={{
                my: 4,
                mx: 8,
                borderWidth: 1,
              }}
            />

            {content && (
              <section itemProp="articleBody">{parse(content)}</section>
            )}
          </article>
        </Box>

        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPost($id: String!, $previousPostId: String, $nextPostId: String) {
    post: wpPost(id: { eq: $id }) {
      author {
        node {
          firstName
          lastName
        }
      }
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              articleImage: gatsbyImageData(
                width: 1600
                aspectRatio: 2.46
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
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`;
