import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import CategoryBlock from '../components/CategoryBlock';
import FeaturedBlock from '../components/FeaturedBlock';

import type { HeadFC, PageProps } from 'gatsby';

const Homepage = ({ data }: PageProps<Queries.HomepageQuery>) => {
  const featuredPosts = data.featuredPosts.nodes;
  const categories = data.categories.nodes;

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
          key={category.name}
          category={category}
          postGridVariant={i % 2 === 0 ? 'first' : 'second'}
        />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query Homepage {
    featuredPosts: allStrapiPost(filter: { featured: { eq: true } }, limit: 9) {
      nodes {
        title
        author {
          firstName
          lastName
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
        categories {
          name
          slug
        }
        createdAt
        slug
      }
    }
    categories: allStrapiCategory {
      nodes {
        name
        slug
        posts {
          author {
            firstName
            lastName
          }
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
          categories {
            name
            slug
          }
          title
          slug
          createdAt
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Echorefer Gatsby | Home Page</title>;

export default Homepage;
