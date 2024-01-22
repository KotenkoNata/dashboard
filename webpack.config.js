const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    entry: {
        index: './src/views/layout.pug',
        //☝🏽 Insert your PUG HTML files here
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '',
        filename: 'assets/js/[name].[contenthash:8].js',
        //☝🏽 Output filename of files with hash for unique id
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            //☝🏽 Format HTML (only in dev mode)
            css: {
                filename: 'assets/css/[name].[contenthash:8].css',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader,
                //☝🏽 Load Pug files
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                // To use images on pug files:
                test: /\.(png|jpg|jpeg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]',
                },
            },
            {
                // To use fonts on pug files:
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]',
                },
            },
        ],
    },
    resolve: {
        // Add the following alias to resolve the 'sass' module correctly
        alias: {
            sass: require.resolve('sass'),
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: {
            paths: ['src/**/*.*', 'assets/scss/**/*.*'],
            //☝🏽 Enables HMR in these folders
            options: {
                usePolling: true,
            },
        },
    },
    stats: 'errors-only',
    //☝🏽 For a cleaner dev-server run
};
