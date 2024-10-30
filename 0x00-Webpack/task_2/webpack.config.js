const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // CSS loader
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i, // Image loader
                type: 'asset',
                use: [
                    {
                        loader: 'image-webpack-loader', // Optimize images
                        options: {
                            disable: process.env.NODE_ENV !== 'production', // Disable in dev mode
                            mozjpeg: { progressive: true, quality: 65 },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
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
};
