const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { isDevMode } = require("./webpack.helpers");

module.exports = [
  {
    // Babel Loader
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                browsers: ["last 2 versions", "ie >= 11"],
              },
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: isDevMode() ? "style-loader" : MiniCssExtractPlugin.loader },
      { loader: "css-loader" },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: isDevMode() ? "style-loader" : MiniCssExtractPlugin.loader },
      { loader: "css-loader" },
      { loader: "less-loader" },
    ],
  },
  {
    // Assets loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: "asset",
    generator: {
      filename: "assets/[hash][ext][query]",
    },
  },
];
