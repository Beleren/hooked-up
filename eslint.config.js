import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/**
 * Flat ESLint config replacing CRA's `eslint-config-react-app`, which went away
 * with react-scripts. react-hooks is the rule set that actually matters here:
 * it catches the dependency-array mistakes these demos are about.
 */
export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  // v7 keeps the eslintrc-shaped configs at the top level; the flat-config
  // variants live under `configs.flat`.
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.vite,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  },
  {
    // Vitest runs with `globals: true` (see vite.config.js), so test files use
    // test/expect/etc. without importing them.
    files: ['**/*.test.{js,jsx}', 'src/setupTests.js'],
    languageOptions: { globals: globals.vitest },
  },
];
