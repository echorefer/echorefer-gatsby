import path from 'path';

import type { GatsbyNode } from 'gatsby';

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

  const { createPage } = gatsbyUtilities.actions;
  // TODO: Check why return from query assigned to context is not showing on component!

  createPage({
    path: `/`,
    component: path.resolve(`src/pages/index.tsx`),
  });
};

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  );

const createCategoryPages = async ({ categories, gatsbyUtilities }) => {
  return Promise.all(
    categories.map((category) =>
      gatsbyUtilities.actions.createPage({
        path: category.uri,
        component: path.resolve(`./src/templates/category.tsx`),
        context: {
          id: category.id,
          offset: 0,
          postsPerPage: 10,
        },
      })
    )
  );
};

const getPosts = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query WpPosts {
      allWpPost(sort: { date: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            uri
          }
          next {
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

  return graphqlResult.data.allWpPost.edges;
};

const getCategories = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query WpCategories {
      allWpCategory {
        nodes {
          id
          uri
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

  return graphqlResult.data.allWpCategory.nodes;
};
