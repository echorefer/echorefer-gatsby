import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Echorefer Gatsby Template`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://localhost/graphql',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Echorefer Gatsby Template`,
        short_name: `echorefer gatsby template`,
        start_url: `/`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
  ],
};

export default config;
