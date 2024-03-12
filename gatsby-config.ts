import dotenv from 'dotenv';

import type { GatsbyConfig } from 'gatsby';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Echorefer Gatsby Template',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          { singularName: 'post' }, 
          { singularName: 'category' }, 
          { singularName: 'menu' }, 
          { singularName: 'menu-item' }
        ],
        singleTypes: [],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};

export default config;
