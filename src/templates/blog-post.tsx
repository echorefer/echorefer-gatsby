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
  const articleImage = post?.featuredImage?.localFile?.childImageSharp
    ?.articleImage
    ? getImage(post?.featuredImage?.localFile?.childImageSharp?.articleImage)
    : null;
  const articleImageAlt = 'Placeholder';
  const formattedDate =
    post?.publishedAt &&
    new Date(post?.publishedAt).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  const authorName = `${post?.author?.firstName} ${post?.author?.lastName}`;
  const category = post?.categories?.[0]?.name || '';
  const uri = post?.categories?.[0]?.slug
    ? `/${post?.categories?.[0]?.slug}`
    : '';

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
                  <GatsbyImage image={articleImage} alt={articleImageAlt} />
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
                  {post?.title}
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

            {post?.content?.data && (
              <section itemProp="articleBody">
                {post?.content?.data?.content &&
                  parse(post?.content?.data?.content)}
              </section>
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
                <Link
                  to={`/${previous.slug}`}
                  rel="prev"
                  component={GatsbyLink}
                >
                  ← {previous.title}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={`/${next.slug}`} rel="next" component={GatsbyLink}>
                  {next.title} →
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
    post: strapiPost(id: { eq: $id }) {
      id
      author {
        firstName
        lastName
      }
      excerpt {
        data {
          excerpt
        }
      }
      content {
        data {
          content
        }
      }
      title
      categories {
        name
        slug
      }
      publishedAt
      featuredImage {
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
    previous: strapiPost(id: { eq: $previousPostId }) {
      title
      slug
    }
    next: strapiPost(id: { eq: $nextPostId }) {
      title
      slug
    }
  }
`;
