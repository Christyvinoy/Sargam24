const path = require('path');
const pathBrowserify = require.resolve('path-browserify');
const osBrowserify = require.resolve('os-browserify/browser');
const cryptoBrowserify = require.resolve('crypto-browserify');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          path: pathBrowserify,
          os: osBrowserify,
          crypto: cryptoBrowserify,
        },
      };

      return webpackConfig;
    },
  },
};
