var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var entry = {
	'banana-grid': './src/grid.ts'
};
var distPath = './dist';
var exclude = /(node_modules)|(dist)|(lib)/;

var config = {
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
	}
};

module.exports = config;
