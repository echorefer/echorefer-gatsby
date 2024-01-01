import path from 'path';

import type { GatsbyNode } from 'gatsby';

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
      allWpCategory(filter: { name: { ne: "Senza categoria" } }) {
        nodes {
          id
          uri
          count
          name
          description
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

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  await posts.map(({ previous, post, next }) =>
    gatsbyUtilities.actions.createPage({
      path: post.uri,
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
    const { count, uri, id, name, description } = category;
    const postsPerPage = 6;
    const pageCount = count ? Math.ceil(count / postsPerPage) : 0;

    Array.from({ length: pageCount }).forEach(async (_, i) => {
      await gatsbyUtilities.actions.createPage({
        path: i === 0 ? uri : `${uri}page/${i + 1}`,
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

  const { createPage } = gatsbyUtilities.actions;

  createPage({
    path: `/`,
    component: path.resolve(`src/pages/index.tsx`),
  });
};
