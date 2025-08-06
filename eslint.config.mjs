// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt([
  {
    rules: {
      "no-prototype-builtins": "off",
      "no-template-curly-in-string": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",
      "max-len": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "vue/multi-word-component-names": "off",
      "no-undef": "off",
      "vue/script-setup-uses-vars": "error",
      "vue/html-closing-bracket-newline": [
        "error",
        {
          singleline: "never",
          multiline: "always",
        },
      ],
      indent: "off",
      "vue/singleline-html-element-content-newline": [
        "error",
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
          externalIgnores: [],
        },
      ],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      "vue/first-attribute-linebreak": [
        "error",
        {
          singleline: "ignore",
          multiline: "below",
        },
      ],
      "vue/html-indent": [
        "error",
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: {
            startTag: 0,
            endTag: 2,
            selfClosingTag: 0,
          },
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      "vue/no-v-html": 0,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "vue/attribute-hyphenation": "off",
      "vue/v-on-event-hyphenation": "off",
    },
  },
  eslintConfigPrettier,
]
  // Your custom configs here
)
