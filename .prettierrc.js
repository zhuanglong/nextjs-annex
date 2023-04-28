/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120, // 默认 80
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  semi: true, // 句末加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  bracketSpacing: true, // 对象数组加空格
  trailingComma: 'all', // 最后一个对象元素加逗号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  vueIndentScriptAndStyle: true, // vue 文件中的 script 和 style 内不用缩进
  proseWrap: 'never', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'strict', // 根据显示样式决定 html 要不要折行
  endOfLine: 'lf', // 换行符使用 lf
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],
};
