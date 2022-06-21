const problems = require('./lib/problems.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...problems,
  },
};
