module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    }
  },
  settings: {
    "import/resolver": {
      typescript: {
        directory: "./"
      },
    },
  },
  rules: {
    "import/no-cycle": "off"
  }
};
