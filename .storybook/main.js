module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    );
    return config;
  },
};
