const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/**/*.html", "public/**/*"],
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo App",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};