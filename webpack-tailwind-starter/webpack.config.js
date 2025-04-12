const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            include: path.resolve(__dirname, "src"),
            use: ["style-loader", "css-loader", "postcss-loader"],
        }
    ]
  }
};
