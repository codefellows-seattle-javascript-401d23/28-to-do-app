const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { HotModuleReplacementPlugin } = require('webpack');

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';

webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

module.exports = merge(commonConfig, webpackDevConfig);
