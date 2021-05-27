const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const HtmlPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new HtmlPlugin({
      template: 'index.html'
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
