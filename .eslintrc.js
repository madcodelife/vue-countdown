module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'off',
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'lines-between-class-members': 'off',
    'no-unused-vars': 1,
    'dot-notation': 0,
    'no-lonely-if': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'handle-callback-err': 0
  }
}
