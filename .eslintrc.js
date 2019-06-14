module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'off'
  }
}
