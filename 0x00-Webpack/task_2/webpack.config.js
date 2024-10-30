const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/, // CSS loader
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i, // Image loader
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Output images to images/ folder
                },
                use: [
                    {
                        loader: 'image-webpack-loader', // Optimize images
                        options: {
                            disable: process.env.NODE_ENV !== 'production', // Disable in dev mode
                            mozjpeg: { progressive: true },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'), // Template HTML
            filename: 'index.html', // Output HTML name
        }),
    ],
};
