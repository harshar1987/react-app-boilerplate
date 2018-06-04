const webpack = require("webpack");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/* eslint-disable no-unused-vars */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const bundleOutputDir = "./dist";
module.exports = (env) => {

    const devMode = !(env && env.prod);
    return [
        {
            stats: { modules: false },
            entry: {
                "bundle": ["babel-polyfill", "./src/App.jsx"]
            },
            performance: {
                hints: false
            },
            resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"] },
            output: {
                path: path.resolve(__dirname, bundleOutputDir),
                filename: "[name].js"
            },
            module:
                {
                    rules:
                        [
                            {
                                enforce: "pre",
                                test: /\.(js|jsx)$/,
                                loader: "eslint-loader",
                                options:
                                    {
                                        failOnWarning: true,
                                        failOnerror: true,
                                        emitError: true
                                    },
                                exclude: /node_modules/
                            },
                            {
                                test: /\.(js|jsx)$/,
                                exclude: /node_modules/,
                                use:
                                    {
                                        loader: "babel-loader",
                                        options: {
                                            presets: ["env", "babel-preset-react"]
                                        }
                                    }
                            },
                            {
                                test: /\.css$/,
                                exclude: /node_modules/,
                                use:
                                    [
                                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                                        "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
                                    ]
                            },
                            {
                                test: /\.(png|jpg|jpeg|gif|svg)$/,
                                use: "url-loader?limit=25000",
                                exclude: /node_modules/
                            },
                            {
                                test: /\.svg$/,
                                loader: "url-loader",
                                exclude: /node_modules/
                            }
                        ]
                },
            optimization:
                {
                    minimizer:
                        [
                            new UglifyJsPlugin({
                                cache: true,
                                parallel: true,
                                sourceMap: true,
                                uglifyOptions: {
                                    compress: {
                                        /* eslint-disable camelcase */
                                        drop_console: true
                                    }
                                }
                            }),
                            new OptimizeCSSAssetsPlugin({})
                        ],
                    splitChunks:
                        {
                            chunks: "all",
                            cacheGroups: {
                                vendors: {
                                    name: "vendors",
                                    test: /node_modules/,
                                    enforce: true,
                                    chunks: "all"
                                },
                                styles: {
                                    name: "styles",
                                    test: /\.css$/,
                                    chunks: "all",
                                    enforce: true
                                },
                                default: {
                                    minChunks: 2,
                                    priority: -20,
                                    reuseExistingChunk: true
                                }
                            }
                        }
                },
            plugins:
                [
                    new CleanWebPackPlugin(["dist"], { root: path.resolve(__dirname) }),
                    new HtmlWebPackPlugin({
                        template: "./src/index.html",
                        favicon: "./src/favicon.ico",
                        title: "React app"
                    }),
                    new CopyWebpackPlugin([
                        {
                            context: "./src/images",
                            from: "**/*",
                            to: "./images"
                        }
                    ]),
                    new MiniCssExtractPlugin({
                        filename: devMode ? "[name].css" : "[name].[hash].css",
                        chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
                    }),
                    new webpack.SourceMapDevToolPlugin({
                        filename: "[name].js.map",
                        exclude: /node_modules/,
                        moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
                    }),
                    new webpack.HotModuleReplacementPlugin()
                    //, new BundleAnalyzerPlugin()
                ],
            devtool: "cheap-module-eval-source-map",
            devServer:
                {
                    contentBase: path.resolve(__dirname, "dist"),
                    compress: true,
                    port: 9000
                }
        }];
};