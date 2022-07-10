module.exports = {
  //eslint自动格式化
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.options": {
    extensions: [".tsx", ".ts", ".js", ".vue", ".jsx"],
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  // 编辑器设置 - 保存时做格式化
  "editor.formatOnSave": true,
  // 编辑器设置 - 默认采用prettier-now做格式化
  // 如果使用的是prettier，这的设置应该是 esbenp.prettier-vscode
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // 控制缩进
  "prettier.useTabs": false, // 缩进不使用tab，使用空格
  "prettier.tabWidth": 2, // 缩进字节数

  // 函数声明时小括号前后要加空格
  // 如果你使用prettier这一项是不能做选择的，导致和eslint默认配置的冲突
  // 可以在百度中搜到很多的记录： https://www.baidu.com/s?wd=prettier%20%E5%87%BD%E6%95%B0%E7%A9%BA%E6%A0%BC
  "prettier.spaceBeforeFunctionParen": true,

  // react的jsx让>与结束标签同行
  "prettier.jsxBracketSameLine": true,

  "prettier.semi": false, // 不要给语句加;
  "prettier.singleQuote": true, // 采用单引号
  "prettier.trailingComma": "none", // 不要尾随逗号,
  "prettier.printWidth": 80, // 每行超过80列就换行

  // 在.js中，写div按下tab就可以自动补全，而不需要写<div再补全
  "emmet.includeLanguages": {
    javascript: "javascriptreact",
    typescript: "typescriptreact",
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
};
