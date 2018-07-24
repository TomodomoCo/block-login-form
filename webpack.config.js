/**
 * External Dependencies
 */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackRTLPlugin = require("webpack-rtl-plugin");

// Enviornment Flag
const inProduction = "production" === process.env.NODE_ENV;

// Externals
const externals = {
  react: "React",
  lodash: "lodash",
};

// WordPress dependences
const wpDependencies = [
  "components",
  "element",
  "blocks",
  "hooks",
  "editor",
  "utils",
  "date",
  "data",
  "i18n",
  "editPost",
  "plugins",
  "apiRequest"
];

wpDependencies.forEach(wpDependency => {
  externals["@wordpress/" + wpDependency] = {
    this: ["wp", wpDependency]
  };
});

// Webpack config.
const config = {
  entry: {
    animation: ["./src/index.js"]
  },
  externals,
  output: {
    filename: "build/script.js",
    path: __dirname,
    library: ["tomodomo-block-login-form", "[name]"],
    libraryTarget: "this"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new WebpackRTLPlugin(),
  ],
  stats: {
    children: false
  }
};

// For Productions
if (inProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true }));
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
}

module.exports = config;
