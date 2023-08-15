module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "eslint-plugin-canonical",
    "import",
    "simple-import-sort",
    "unused-imports",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
