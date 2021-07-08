module.exports = {
  env: { browser: true, node: true, commonjs: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    __proto__: true,
    __wxConfig: true,
    $global: true,
    App: true,
    Atomics: 'readonly',
    Behavior: true,
    Component: true,
    gioGlobal: true,
    global: true,
    Page: true,
    platformConfig: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    camelcase: 'off',
    'comma-dangle': ['error', 'never'],
    'no-case-declarations': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'warn',
    'no-empty': 'warn',
    'no-fallthrough': 'warn',
    'no-global-assign': 'warn',
    'no-misleading-character-class': 'off',
    'no-prototype-builtins': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-useless-escape': 'warn',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        endOfLine: 'auto',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],
    quotes: ['error', 'single']
  }
};
