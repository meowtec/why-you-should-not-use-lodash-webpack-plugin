const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const createWebpackConfig = (entry) => {
  /** @type {import('webpack').Configuration} */
  const webpackConfig = {
    entry: {
      [entry]: `./src/${entry}`,
    },
    plugins: [
      new LodashModuleReplacementPlugin({}),
      // new BundleAnalyzerPlugin(),
    ],
    output: {
      filename: '[name].js'
    },
    optimization: {
      minimize: false,
      namedModules: true,
    },
  };
  return webpackConfig;
}

/**
 * make sure each entry build standalone
 */
module.exports = [
  'you-break-third-party',
  'third-party-break-you',
  'wrong-both-clamp-to-number'
].map(createWebpackConfig);
