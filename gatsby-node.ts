import path from 'path';

import type { GatsbyNode } from 'gatsby';

const getPosts = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query allPosts {
      allStrapiPost(sort: { publishedAt: DESC }) {
        edges {
          next {
            id
          }
          post: node {
            id
            slug
          }
          previous {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allStrapiPost.edges;
};

const getCategories = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query allCategories {
      categories: allStrapiCategory {
        nodes {
          id
          slug
          description
          name
          posts {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your categories`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.categories.nodes;
};

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  await posts.map(({ previous, post, next }) =>
    gatsbyUtilities.actions.createPage({
      path: `/${post.slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        id: post.id,
        previousPostId: previous ? previous.id : null,
        nextPostId: next ? next.id : null,
      },
    })
  );

const createCategoryPages = ({ categories, gatsbyUtilities }) =>
  categories.map((category) => {
    const { slug, id, name, description, posts } = category;
    const count = posts.length;
    const postsPerPage = 3;
    const pageCount = count ? Math.ceil(count / postsPerPage) : 0;
    const uri = `/${slug}`;

    Array.from({ length: pageCount }).forEach(async (_, i) => {
      await gatsbyUtilities.actions.createPage({
        path: i === 0 ? uri : `${uri}/page/${i + 1}`,
        component: path.resolve(`./src/templates/category.tsx`),
        context: {
          id,
          name,
          description,
          count,
          uri,
          limit: postsPerPage,
          skip: i * postsPerPage,
          pageCount: pageCount,
          currentPage: i + 1,
        },
      });
    });
  });

export const createPages: GatsbyNode['createPages'] = async (
  gatsbyUtilities
) => {
  const posts = await getPosts(gatsbyUtilities);
  const categories = await getCategories(gatsbyUtilities);

  if (posts.length) {
    await createIndividualBlogPostPages({ posts, gatsbyUtilities });
  }

  if (categories.length) {
    await createCategoryPages({ categories, gatsbyUtilities });
  }
};
