const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
const entry = "./wwwroot/webpack.js"; // ex.: "./wwwroot/webpack.ts"
const distPath = "/wwwroot/dist"; // ex.: "/wwwroot/dist"
// const exclude = /(node_modules)|(dist)|(lib)/; // folder to exclude
const exclude = /(node_modules)|(dist)/; // folder to exclude

module.exports = {
	entry: entry,
	output: {
		filename: "bundle.js",
		path: __dirname + distPath
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ".scss", "css"]
	},
	module: {
		rules: [
			{
				test: /\.html?$/,
				exclude: exclude,
				loader: "source-map-loader"
			},
			{
				test: /\.tsx?$/,
				exclude: exclude,
				loader: "awesome-typescript-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: exclude,
				loader: "source-map-loader"
			},
			{
				test: /\.scss$/,
				exclude: exclude,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				exclude: exclude,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{
				test: /(\.css$)|(\.scss$)/,
				exclude: exclude,
				loader: 'postcss-loader',
				options: {
					plugins: () => [require('autoprefixer')({ browsers: 'last 30 versions' })],
					sourceMap: true,
				}
			}
			
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new LiveReloadPlugin({})
	]
};