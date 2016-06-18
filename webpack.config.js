module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.(js|jsx)$/,
              loader: "babel",
              exclude: /node_modules/,
              query: {"presets":["react", "es2015"]} }
        ]
    }
};
