const webpack = require("webpack");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { isDevMode } = require("./webpack.helpers");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  isDevMode() && new webpack.HotModuleReplacementPlugin(),
  isDevMode() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "assets/images/logo.png",
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[chunkhash].css",
    chunkFilename: "[name].[chunkhash].chunk.css",
  }),
  new ESLintPlugin({
    // Plugin options
    extensions: ["js", "jsx", "ts", "tsx"],
    emitError: true,
    emitWarning: true,
    failOnError: false,
    failOnWarning: false,
    useEslintrc: true,
    cache: true,
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static",
    openAnalyzer: false,
  }),
].filter(Boolean);
