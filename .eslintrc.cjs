/**
 * ESLint configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:import/typescript", "prettier"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:tailwindcss/recommended",
      ],
      rules: {
        "react/no-children-prop": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "sort-imports": [
          "error",
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
          },
        ],
      },
      plugins: ["@typescript-eslint", "import", "react", "react-hooks", "tailwindcss"],
    },
    {
      files: ["*.cjs", "*.config.ts"],
      env: { node: true },
    },
    {
      files: ["*.cjs"],
      parserOptions: { sourceType: "script" },
    },
  ],

  ignorePatterns: ["/.cache", "/.git", "/.husky", "/*/dist"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resovler": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
    react: {
      version: "detect",
    },
  },
};