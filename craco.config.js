const path = require("path");
const CracoConfig = require("craco-less");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  style: {
    postcss: {
      plugins: () => [require("autoprefixer"), require("tailwindcss")],
    },
  },
  babel: {
    presets: [["@babel/preset-typescript"]],
  },
  plugins: [
    {
      plugin: CracoConfig,
      options: {
        modifyLessRule: () => {
          return {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          };
        },
      },
    },
  ],
};
