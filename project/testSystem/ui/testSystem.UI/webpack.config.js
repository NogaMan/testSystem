{
    "use strict";
    module.exports = {
        entry: "./scripts/index.js",
        output: {
            filename: "bundle.js"
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    query: {
                        presets: ["es2015", "react"]
                    }
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                    exclude: /node_modules/,
                }
            ]
        }
    };
}
