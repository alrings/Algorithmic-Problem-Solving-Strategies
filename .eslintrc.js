module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    'airbnb-base',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    'import',
  ],
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
}
