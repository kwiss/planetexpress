require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  env: {
    AUTH_KEY_ID: process.env.AUTH_KEY_ID,
    AUTH_PRIVATE_KEY: process.env.AUTH_PRIVATE_KEY,
    AUTH_PUBLIC_KEY: process.env.AUTH_PUBLIC_KEY
  },
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  }
};
