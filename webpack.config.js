const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL || 'localhost'),
      'process.env.BASE_API_PORT': JSON.stringify(process.env.BASE_API_PORT || '8000'),
    }),
  ],
};
