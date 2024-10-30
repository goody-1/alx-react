const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
    clean: true,
	},
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Folder to serve
    compress: true,
    port: 8564,
    open: true,
  },
	module: {
		rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
	},
	performance: {
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        // template: './src/index.html',
        title: 'Webpack',
        filename: 'index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
};
