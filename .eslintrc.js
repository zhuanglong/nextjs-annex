module.exports = {
  // 继承规则集
  extends: ['next/core-web-vitals', 'prettier', 'plugin:prettier/recommended'],
  // 忽略检查的全局变量
  // globals: {
  //   process: true
  // },
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        // 调试了好久 pathGroups 都不生效，最后终于在这个 github issue 里找到解决办法了
        // https://github.com/import-js/eslint-plugin-import/issues/1682#issuecomment-608969468
        pathGroupsExcludedImportTypes: [],
      },
    ],
    // sort-imports 只用开启 memberSort，因为其他的功能都由 import/order 规则实现
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
};
