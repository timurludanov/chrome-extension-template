const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    background: "./src/background/background.ts",
    popup: "./src/popup/popup.tsx",
    options: "./src/options/options.tsx",
    content: "./src/content/content.ts",
  },
  resolve: {
    extensions: ["js", ".ts", ".tsx"],
    alias: {
      common: path.resolve("./src/common"),
    },
  },
  module: {
    rules: [
      { test: /\.(js|ts|tsx)?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../assets/fonts/",
              publicPath: "chrome-extension://__MSG_@@extension_id__/assets/fonts/",
            },
          },
        ],
      },
    ],
  },
  node: false,
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "[name].bundle.js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "../assets/css/[name].bundle.css" })],
};
