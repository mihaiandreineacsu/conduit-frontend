const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL || 'http://localhost:8889'),
    }),
  ],
};
