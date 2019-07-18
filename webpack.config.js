const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
        messenger: './src/app/messenger.js',
        profile : './src/app/profile.js',
        search : './src/app/search.js',
        sign_in : './src/app/sign_in.js',
        sign_up : './src/app/sign_up.js',
        reset : './src/app/reset.js',
        reset_mail : './src/app/reset_mail.js',
        verify: './src/app/verify.js',
        sign_up_pass: './src/app/sign_up_pass.js',
        verify_up : './src/app/sign_up_verify.js',
    },
    output:{
        filename: "bundles/[name].js",
        path: path.resolve(__dirname, './dist'),
    },
    module:{
        rules:[
            {
                test: /\.pug$/,
                loaders: [
                    // html loader gets webpack to process <img> src
                    'html-loader',
                    // requires pretty option otherwise some spacing between elements is lost
                    'pug-html-loader?{"pretty":true,"exports":false}'
                ],
                include: [path.resolve]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'messenger.html',
            chunks: ['messenger'],
            template: './src/public/messenger/messenger.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'profile.html',
            chunks: ['profile'],
            template: './src/public/profile/profile.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            chunks: ['search'],
            template: './src/public/search/search.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign_in.html',
            chunks: ['sign_in'],
            template: './src/public/sign_in/sign_in.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'reset.html',
            chunks: ['reset'],
            template: './src/public/sign_in/reset.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'reset_mail.html',
            chunks: ['reset_mail'],
            template: './src/public/sign_in/reset_mail.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'verify.html',
            chunks: ['verify'],
            template: './src/public/sign_in/verify.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign_up.html',
            chunks: ['sign_up'],
            template: './src/public/sign_up/sign_up.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign_up_pass.html',
            chunks: ['sign_up_pass'],
            template: './src/public/sign_up/sign_up_pass.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'verify_up.html',
            chunks: ['verify_up'],
            template: './src/public/sign_up/verify_up.pug'
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css'
        }),
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback:true
    }
}