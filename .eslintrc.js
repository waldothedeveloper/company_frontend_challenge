module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    before: true,
    after: true,
    spyOn: true,
    // These should be in scope but for some reason eslint can't see them
    NodeJS: true,
    JSX: true,
    NodeRequire: true,
    TimerHandler: true,
    __BASE_PATH__: true,
    __ASSET_PREFIX__: true,
    _CFLAGS_: true,
    __GATSBY: true,
    __TRAILING_SLASH__: true,
  },
  parser: `@babel/eslint-parser`,
  extends: [
    `eslint:recommended`,
    `react-app`,
    `plugin:react/recommended`,
    "plugin:react-hooks/recommended",
  ],
  plugins: [`react`],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: `17.0.1`,
    },
  },
}
