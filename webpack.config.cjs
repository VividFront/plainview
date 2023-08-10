require('dotenv').config({ path: './.env' });

const path = require('path');
const webpack = require('webpack');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// PostCSS Plugins
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

require('dotenv').config();

module.exports = {
  mode: process.env.ENVIRONMENT || process.env.NODE_ENV || 'production',
  // watch: true,
  // watchOptions: {
  //   ignored: '**/node_modules',
  // },
  entry: ['./src/js/index.js', './src/scss/index.scss'],
  output: {
    filename: './assets/[name].js',
    path: path.resolve(__dirname, './'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ProgressBarPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(s?[c|a]ss)/, // /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssImport(),
                  tailwindcss(),
                  postcssPresetEnv(),
                  autoprefixer(),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
