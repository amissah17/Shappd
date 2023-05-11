const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry:{ bundle: path.resolve(__dirname, "src/scripts/index.js"),},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  plugins: [ new HtmlWebpackPlugin({ filename: 'index.html',template: './src/index.html' }),]
};
