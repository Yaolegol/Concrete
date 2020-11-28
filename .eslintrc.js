module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:flowtype/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard",
        "plugin:prettier/recommended",
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["flowtype", "prettier", "react"],
    rules: {
        "prettier/prettier": "error",
    },
};
