module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'no-console-log'],
  rules: {
    'no-console': 'error',
  },
};
