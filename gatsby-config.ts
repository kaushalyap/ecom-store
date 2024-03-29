/* eslint-disable import/no-import-module-exports */
import * as dotenv from 'dotenv';
import PrismicTypes from './custom_types/categories';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    siteUrl: 'https://solidtech.lk',
    title: 'SolidTech LK',
    titleTemplate: '%s - SolidTech.LK',
    headline: 'headline',
    description:
      'Sri Lankan owned online only electronic store with free deliveries for which value customer happiness over sales',
    siteLanguage: 'en',
    image: 'src/images/logos/logo.svg',
    ogLanguage: 'en_US',
    author: 'SolidTech.LK',
    twitterUsername: '@solidtech',
    facebookUsername: 'solidtech',
  },
  jsxRuntime: 'automatic',
  // graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: { icon: 'src/images/logos/logo.png' },
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
    { resolve: 'gatsby-plugin-robots-txt' },
    'gatsby-plugin-postcss',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['editor.jsx'],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        schemas: {
          categories: PrismicTypes,
        },
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: {
          type: 'service_account',
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY?.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.CLIENT_EMAIL,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      },
    },
  ],
};
