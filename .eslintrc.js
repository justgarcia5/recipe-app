module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [""],
  globals: {
    gon: true,
    $: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    complexity: ["error", 4]
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.js"],
      rules: {
        "max-nested-callbacks": "off",
        "max-statements": "off"
      }
    }
  ]
};
