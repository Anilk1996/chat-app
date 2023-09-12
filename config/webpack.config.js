const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            // presets: ["@babel/preset-env", "@babel/preset-react"],
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      pages: path.resolve(process.cwd(), "src/components/pages/"),
      organisms: path.resolve(process.cwd(), "src/components/organisms/"),
      molecules: path.resolve(process.cwd(), "src/components/molecules/"),
      atoms: path.resolve(process.cwd(), "src/components/atoms/"),
    },
  },
};
