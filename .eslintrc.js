const INLINE_ELEMENTS = [
  "a",
  "abbr",
  "audio",
  "b",
  "bdi",
  "bdo",
  "canvas",
  "cite",
  "code",
  "data",
  "del",
  "dfn",
  "em",
  "i",
  "iframe",
  "ins",
  "kbd",
  "label",
  "map",
  "mark",
  "noscript",
  "object",
  "output",
  "picture",
  "q",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "svg",
  "time",
  "u",
  "var",
  "video"
];

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "quote-props": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "space-before-function-paren": ["error", "never"],
    "no-unused-vars": "off",
    "no-undef": "off", // auto import
    "prefer-rest-params": "off",
    "vue/script-setup-uses-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-var-requires": "off",
    "no-empty-function": "off",
    "no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    quotes: [2, "double"],
    semi: [2, "always"],
    "vue/html-closing-bracket-newline": [
      2,
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 3,
        multiline: 1,
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          normal: "never",
          void: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^[_scope]",
      },
    ],
    "vue/no-setup-props-destructure": "off",
    "vue/no-mutating-props": "off",
    "eslint no-empty": "off",
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["el-button", ...INLINE_ELEMENTS],
        allowEmptyLines: false,
      },
    ],
  },
};
