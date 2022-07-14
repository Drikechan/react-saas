const path = require("path");
const { loaderByName } = require("@craco/craco");
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
  plugins: {
    plugin: CracoConfig,
  },

  options: {
    modifyLessRule(lessRule, context) {
      // You have to exclude these file suffixes first,
      // if you want to modify the less module's suffix
      lessRule.exclude = /\.m\.less$/;
      return lessRule;
    },
    modifyLessModuleRule(lessModuleRule, context) {
      // Configure the file suffix
      lessModuleRule.test = /\.m\.less$/;

      // Configure the generated local ident name.
      const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
      cssLoader.options.modules = {
        localIdentName: "[local]_[hash:base64:5]",
      };

      return lessModuleRule;
    },
  },
};
