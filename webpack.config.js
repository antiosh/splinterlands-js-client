const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
  return {
    entry: ['whatwg-fetch', './src/index.tsx'],
    devtool: ['local', 'staging'].includes(env) ? 'eval-source-map' : false,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
      fallback: {
        buffer: require.resolve('buffer/'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
      new CopyPlugin({
        patterns: [
          './src/app/config.json',
        ],
      }),
      new webpack.DefinePlugin({
        'process.env.config': JSON.stringify(env.config),
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  }
};
