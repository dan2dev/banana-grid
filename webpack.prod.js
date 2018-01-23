const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	output: {
		filename: '[name].min.js'
	},
	plugins: [
		new ExtractTextPlugin('[name].min.css')
	]
});
