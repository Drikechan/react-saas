module.exports = {
  style: {
    postcss: {
      plugins: () => [require("autoprefixer"), require("tailwindcss")],
    },
  },
  babel: {
    presets: [["@babel/preset-typescript"]],
  },
};
