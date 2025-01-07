// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Dotenv = require("dotenv-webpack");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//     new Dotenv(),
//   ],
//   devServer: {
//     static: [
//       {
//         directory: path.join(__dirname),
//         publicPath: "/",
//         serveIndex: true,
//       },
//     ],
//     compress: true,
//     port: 3001,
//     open: true,
//     hot: true,
//     historyApiFallback: true,
//   },
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    // 1) Punkt wejścia
    entry: "./src/index.js",

    // 2) Miejsce wyjścia, nazwa pliku
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      clean: true,
    },

    // 3) Narzędzie do map źródłowych
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",

    // 4) Loadery
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader", // Konfiguracja Babela jest w .babelrc
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false, // Wyłącza przetwarzanie `url()` przez css-loader,public>src
              },
            },

            "postcss-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name][ext]",
          },
        },
        // Możesz dodać obsługę fontów, np.:
        // {
        //   test: /\.(woff2?|eot|ttf|otf)$/,
        //   type: 'asset/resource',
        //   generator: {
        //     filename: 'assets/fonts/[name][ext]',
        //   },
        // },
      ],
    },

    // 5) Rozszerzenia, które bierzemy pod uwagę
    resolve: {
      extensions: [".js", ".jsx"],
    },

    // 6) Pluginy
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      // Wczytuje zmienne z .env do process.env
      new Dotenv(),
    ],

    // 7) DevServer
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      hot: true,
      open: true,
      port: 3001,
      historyApiFallback: true,
    },

    // 8) Optymalizacja
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
