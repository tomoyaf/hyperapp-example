module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devServer: {
    contentBase: "dist",
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
};
