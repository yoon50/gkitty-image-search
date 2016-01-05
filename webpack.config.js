var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// TODO find out more about me!
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	//src: path.join(__dirname, 'src')
};


process.env.BABEL_ENV = TARGET;

var common = {
	entry: PATHS.app,
	// Add resolve.extensions. '' is needed to allow imports an extension
  // Note the .'s before extensions!!! Without those matching will fail
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				// Test expects a RegExp! Note the slashes!
				test: /\.css$/,
				loaders: ['style', 'css'],
				// Include accepts either a path or an array of paths
				include: PATHS.app
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: PATHS.app
			},
			{
				test: /\.json$/,
				loaders: ['json'],
				include: PATHS.app
			},
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'GKitty Images'
		})
	]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
