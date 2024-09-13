module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        semi: ['error', 'always']
        // "ecmaFeatures": {
        //     "legacyDecorators": true
        // }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': 'off',
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-irregular-whitespace': 0,
        'vue/multi-word-component-names': 0,
        'no-unused-vars': 'off',
        'no-undef': 'off',
        "vue/no-multiple-template-root": "off",
        "vue/no-v-model-argument": "off"
    }
}