const path = require("path");

const { ModuleFederationPlugin } = require("webpack").container;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  target: "web",
  devtool: false,
  entry: path.resolve(__dirname, "./src/main.js"),
  experiments: {
    outputModule: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "swc-loader",
      },
    ],
  },
  // externals: ["react", "react-dom"],
  plugins: [
    new ModuleFederationPlugin({
      name: "financial",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
