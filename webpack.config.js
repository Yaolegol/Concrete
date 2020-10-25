const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            // babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // less
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            }
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]
            },
            // css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']
            },
            // images
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            hash: true,
            template: 'src/index.html',
            title: 'My app'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src', 'components'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}
