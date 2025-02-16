import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      // Disable some strict rules
      'no-unused-vars': 'warn',      // Change error to warning
      'no-console': 'off',           // Allow console.log
      'no-undef': 'warn',           // Change error to warning
      'semi': 'warn',               // Warning for missing semicolons
    }
  },
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // React specific rules
    rules: {
      'react/prop-types': 'off',     // Disable prop-types checking
      'react/react-in-jsx-scope': 'off' // Not needed in React 17+
    }
  }
];