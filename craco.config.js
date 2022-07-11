module.exports = {
  style: {
    postcss: {
      plugins: () => {
        return [require("tailwindcss"), require("autoprefixer")];
      },
    },
  },
  babel: {
    presets: [["@babel/preset-typescript"]],
  },
};
