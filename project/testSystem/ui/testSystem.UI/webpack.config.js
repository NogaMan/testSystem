{
    "use strict";
    module.exports = {
        entry: "./index.js",
        output: {
            filename: "bundle.js"
        },
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
