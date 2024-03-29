/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  ignorePatterns: ['cypress.config.ts', 'cypress/support/commands.ts', 'cypress/support/e2e.ts', 'vite.config.ts'],
  extends: [],
  overrides: [
    {
      files: ['src/**/*.{js,ts,jsx,tsx,vue}'],
      extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier'
      ]
    },
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
