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
                }
            ]
        }
    };
}
