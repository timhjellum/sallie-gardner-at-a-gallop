const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const WorkboxWebpackPlugin = require('workbox-webpack-plugin')


const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';




const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		//assetModuleFilename: 'images/[name][ext][query]',
	},
	devServer: {
		open: true,
		host: 'localhost',
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'less-loader'],
			},
			{
				test: /\.less$/i,
				use: [stylesHandler, 'css-loader', 'less-loader'],
			},
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = 'development';
	}
	return config;
};
