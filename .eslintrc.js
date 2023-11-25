module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'jest'],
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
};
