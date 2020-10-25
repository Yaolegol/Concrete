module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:flowtype/recommended',
        'plugin:react/recommended',
        'standard'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'flowtype',
        'react'
    ],
    rules: {
        indent: ['error', 4]
    }
}
