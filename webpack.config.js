import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
let htmlPageNames = ["about", "letter"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/templates/${name}.html`,
    filename: `${name}.html`,
    chunks: [`${name}`], // respective JS files
  });
});

export default {
  mode: "development",
  entry: { main: "./src/index.js", about: "./src/about.js", letter: "./src/letter.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [
      "./src/templates/index.html",
      "./src/templates/about.html",
      "./src/templates/letter.html",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      chunks: ["main"],
    }),
  ].concat(multipleHtmlPlugins),

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
};
