require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_KEY_ID: process.env.AUTH_KEY_ID,
    AUTH_PRIVATE_KEY: process.env.AUTH_PRIVATE_KEY,
    AUTH_PUBLIC_KEY: process.env.AUTH_PUBLIC_KEY,
    GRAPHQL_SERVER_URI: process.env.GRAPHQL_SERVER_URI || "http://localhost:5000/v1/graphql",
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
