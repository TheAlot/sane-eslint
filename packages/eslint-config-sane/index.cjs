const problems = require('./lib/problems.cjs');
const suggestions = require('./lib/suggestions.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...problems,
    ...suggestions,
  },
};
