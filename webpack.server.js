const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  target: "node",
  entry: path.resolve(__dirname, "server/index.js"),
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/server"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
