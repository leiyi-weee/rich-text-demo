const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

const proConfig = {
  mode: 'production',
  entry: './src/index.tsx',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './package.json',
          to: './../weee-auth'
        }
      ]
    })
  ]
};

module.exports = merge(baseConfig, proConfig);
