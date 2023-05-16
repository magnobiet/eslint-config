module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'unicorn',
    'react',
    'react-hooks',
    'jsx-a11y',
    'testing-library',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['error', 'always'],
    curly: 'error',
    semi: 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'unicorn/no-null': 'off',
  },
};
