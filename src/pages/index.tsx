import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import CategoryBlock from '../components/CategoryBlock';
import FeaturedBlock from '../components/FeaturedBlock';

import type { HeadFC, PageProps } from 'gatsby';

const Homepage = ({ data }: PageProps<Queries.HomepageQuery>) => {
  const categories = data.allWpCategory.edges;
  const featuredPosts = data.allWpPost;

  return (
    <Layout>
      <FeaturedBlock posts={featuredPosts} />
      <CallToAction
        heading1="Get Inspired to Achieve"
        heading2="Enhanced Outcomes."
        quote="“ While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior. ”"
        name="Henry C. Link"
      />
      {categories.map((category, i) => (
        <CategoryBlock
          key={category.node.name}
          category={category}
          postGridVariant={i % 2 === 0 ? 'first' : 'second'}
        />
      ))}
    </Layout>
  );
};

export default Homepage;

export const query = graphql`
  query Homepage {
    wpPage(uri: { eq: "/" }) {
      id
      title
      content
    }
    allWpPost(filter: { standard: { featured: { eq: true } } }) {
      nodes {
        author {
          node {
            firstName
            lastName
            avatar {
              url
            }
          }
        }
        excerpt
        title
        date
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
        uri
      }
    }
    allWpCategory(filter: { name: { ne: "Senza categoria" } }) {
      edges {
        node {
          id
          name
          uri
          posts {
            nodes {
              author {
                node {
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
              excerpt
              title
              date
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
              uri
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Echorefer Gatsby | Home Page</title>;
