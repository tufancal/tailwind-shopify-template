const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		main: [
			`${path.resolve(__dirname, './src/js/index.js')}`,
			`${path.resolve(__dirname, './src/style.css')}`,
		],
	},
	output: {
		filename: 'custom-develop.js',
		path: path.resolve(__dirname, './theme/assets'),
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'custom-develop.css',
		}),
	],
};
