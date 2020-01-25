module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      "version": "detect"
    }
  }
};