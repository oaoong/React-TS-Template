const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.tsx"],
  module: {
    rules: [...require("./webpack.rules"), {}],
  },
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [...require("./webpack.plugins")],
  resolve: {
    extenstions: [".js", ".ts", ".tsx", ".jsx", ".css"],
    alias: require("./webpack.aliases"),
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
