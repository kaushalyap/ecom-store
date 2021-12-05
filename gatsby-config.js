// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://techstack.lk',
    title: 'TechStack LK',
    titleTemplate: '%s - TechStack.LK',
    headline: 'headline',
    description:
      'Sri Lankan owned online only electronic store with free deliveries for which value customer happiness over sales',
    siteLanguage: 'en',
    image: 'src/images/logo.svg',
    ogLanguage: 'en_US',
    author: 'TechStack.LK',
    twitterUsername: '@techstacklk',
    facebookUsername: 'techstacklk',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-NRCT1ZFWG3'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        version: 'draft',
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1,
      },
    },
  ],
};
