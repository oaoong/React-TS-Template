module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: require("./webpack.plugins"),
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".css"],
    alias: require("./webpack.aliases"),
  },
  stats: "errors-warnings",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    liveReload: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
