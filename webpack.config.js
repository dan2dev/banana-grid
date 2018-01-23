var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var path = require('path');
var entry = {
	'grid': './src/grid.ts'
};
var distPath = './dist';
var exclude = /(node_modules)|(dist)|(lib)/;

var extractLess = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

module.exports = {
	entry: entry,
	output: {
		filename: '[name].js',
		path: path.resolve(distPath)
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.scss', '.less', '.css'],
		alias: {}
	},
	module: {
		rules: [{
			test: /\.json$/,
			exclude: exclude,
			loader: 'json-loader'
		},
		{
			test: /\.html?$/,
			exclude: exclude,
			loader: 'string-loader'
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: exclude
		},
		{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader'
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			loader: 'file-loader'
		},
		{
			test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			loader: 'file-loader',
			query: {
				name: '[name].[ext]?[hash]'
			}
		},
		{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'source-map-loader'
		},
		{
			test: /\.less$/,
			use: extractLess.extract({
				use: [{
					loader: 'less-loader'
				}]
			})
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					query: {
						modules: false,
						sourceMap: true,
						importLoaders: 2
					}
				}]
			})
		},
		{
			test: /\.scss$/,
			exclude: exclude,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					query: {
						modules: false,
						sourceMap: true,
						importLoaders: 2
					}
				},
					'sass-loader'
				]
			})
		}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	plugins: [
		extractLess,
		new ExtractTextPlugin('[name].css'),
		new LiveReloadPlugin({})
	]
};
