module.exports = {
  // Enforces getter/setter pairs in objects and classes.
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'error', // if you define a setter you must define a getter

  // Requires braces in arrow function bodies.
  // ? This might not be a desirable rule at all.
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],

  // Enforces treating var as block scoped.
  // we don't recommend using vars generally, but if you must this will make it more bearable
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // Enforces camelcase naming convention.
  // https://eslint.org/docs/rules/camelcase
  camelcase: 'off',

  // Enforces or disallows capitalization of the first letter of a comment.
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': 'off',

  // Enforces that class methods utilize this.
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': 'error',

  // Enforces a maximum cyclomatic complexity.
  // ? Should this really be a thing? 10 seems like a reasonable place to start
  // https://eslint.org/docs/rules/complexity
  complexity: ['error', { max: 10 }],

  // Requires return statements to always specify values.
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],

  // Enforces consistent naming when capturing the current execution context.
  // https://eslint.org/docs/rules/consistent-this
  'consistent-this': ['error', 'that'],

  // Requires following curly brace conventions.
  // enforce no curly brace for single statements in blocks
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-or-nest', 'consistent'],

  // Requires a default case in switch statements.
  // https://eslint.org/docs/rules/default-case
  'default-case': 'error',

  // Enforces default clauses in switch statements to be last.
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // Enforces default parameters to be last.
  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // Enforces dot notation whenever possible.
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': 'error',

  // Requires the use of === and !==.
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: 'error',

  // Requires function names to match the name of the variable or property to which they are assigned.
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': 'error',

  // Requires named function expressions.
  // https://eslint.org/docs/rules/func-names
  'func-names': 'error',

  // Enforces the consistent use of either function declarations or expressions.
  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  // Requires grouped accessor pairs in object literals and classes.
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // Requires for in loops to include an if statement.
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // Disallows specified identifiers.
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // Enforces minimum and maximum identifier lengths.
  // https://eslint.org/docs/rules/id-length
  // TODO: try and set these to something and see if it's completely annoying
  'id-length': 'off',

  // Requires identifiers to match a specified regular expression.
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // Requires or disallows initialization in variable declarations.
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // Enforces a maximum number of classes per file.
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': 'error',

  // Enforces a maximum depth that blocks can be nested.
  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['error', { max: 5 }],

  // Enforces a maximum file length.
  // https://eslint.org/docs/rules/max-lines
  // TODO: enable this in other project to test it out. React files might be a problem.
  'max-lines': 'off',

  // Enforces a maximum function length.
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': 'off',

  // Enforces a maximum depth that callbacks can be nested.
  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': ['error', { max: 3 }],

  // Enforces a maximum number of parameters in function definitions.
  // https://eslint.org/docs/rules/max-params
  'max-params': ['error', { max: 3 }],

  // Enforces a maximum number of statements allowed in function blocks.
  // https://eslint.org/docs/rules/max-statements
  'max-statements': 'off',

  // Enforces a particular style for multiline comments.
  // Default is 'starred-block'
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': 'error',

  // Requires constructor names to begin with a capital letter.
  // https://eslint.org/docs/rules/new-cap
  'new-cap': 'error',

  // Disallows the use of alert, confirm, and prompt.
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',

  // Disallows Array constructors.
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // Disallows bitwise operators.
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // Disallows use of caller/callee.
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',
};
