import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
);
