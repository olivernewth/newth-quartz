import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  {
    // Apply typescript-eslint to .ts/.tsx files only
    files: ["**/*.ts", "**/*.tsx"],
    ...tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: "./tsconfig.json",
        },
      },
    }),
  },
  {
    // Base config for all files
    ignores: ["node_modules/**", "dist/**", "build/**", ".quartz/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        node: true,
        browser: true,
        es6: true,
      },
    },
  },
]
