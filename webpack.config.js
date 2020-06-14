const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        // Use src/index as entry point, bundle index.js and imports
        entry: './src/index.js',
        // Which files to use babel on
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        // Bundled source code should be put in dist/bundle.js
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        // Serve application to browser from /dist
        devServer: {
            port: 3000,
            contentBase: './dist',
            hot: true,
        },
    },
    {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),
        ],
        entry: './dist/app.scss',
        output: {
            // This is necessary for webpack to compile
            // But we never use style-bundle.js
            filename: 'style-bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                            },
                        },
                        { loader: 'resolve-url-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('node-sass'),
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/',
                            },
                        },
                    ],
                },
            ],
        },
    },
];
