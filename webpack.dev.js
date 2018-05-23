const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const { HotModeuleReplacementPlugin } = require('webpack');

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: '.build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
    new HotModeuleReplacementPlugin(),
];

module.exports = merge(commonConfig, webpackDevConfig);
