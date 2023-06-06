module.exports = {
  extends: ['next', , 'prettier', 'eslint:recommended', 'next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
