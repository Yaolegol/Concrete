const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
    },
    devtool: "source-map",
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[hash].js",
    },
    module: {
        rules: [
            // babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            // less
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    "postcss-loader",
                    "less-loader",
                ],
            },
            // css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                ],
            },
            // images
            {
                test: /\.(png|jpg)$/,
                use: ["file-loader"],
            },
            // svg
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
    optimization: {
        moduleIds: "hashed",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "src/images",
                    to: "images",
                },
            ],
        }),
        new HtmlWebPackPlugin({
            filename: "index.html",
            hash: true,
            template: "src/index.html",
            title: "My app",
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules"),
        ],
    },
};
