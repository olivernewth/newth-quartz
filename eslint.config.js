import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ["**/*.ts", "**/*.tsx"],
  ignores: ["node_modules/**", "dist/**", "build/**", ".quartz/**"],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: tseslint.parser,
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: ".",
      // Explicitly set TypeScript version
      EXPERIMENTAL_useProjectService: true,
    },
    globals: {
      node: true,
      browser: true,
      es6: true,
    },
  },
})
