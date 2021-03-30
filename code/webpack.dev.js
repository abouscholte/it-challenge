const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    inline: true,
    compress: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: 3000,
    liveReload: true,
  },
});