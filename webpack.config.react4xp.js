const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//──────────────────────────────────────────────────────────────────────────────
// Use this file to adjust the webpack config.
//──────────────────────────────────────────────────────────────────────────────
// A template version of this, with upated properties and explanations,
//  can always be found in the react4xp NPM package:
//   node_modules/react4xp/examples/webpack.config.react4xp.js after installing,
//  or:
//   https://github.com/enonic/enonic-react4xp/blob/master/examples/webpack.config.react4xp.js
//──────────────────────────────────────────────────────────────────────────────

module.exports = function(env, config) {

    // This makes 'npm link' symlinks in node_modules work:
    config.resolve.symlinks = true;

        // Compile .scss and friends:
        config.module.rules = [                                  
            ...(config.module.rules || []),
            {
                test: /\.((sa|sc|c))ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: { auto: true },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            encoding: 'base64',
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                  limit: 25000,
                },
            },
        ];
    
        // Set up how the compiled assets are exported:
        config.plugins = [
            ...(config.plugins || []),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].[contenthash:9].css',
            }),
        ];

    return config;
};
