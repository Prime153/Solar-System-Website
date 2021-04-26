module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  globals: {
    document: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
  },
};
