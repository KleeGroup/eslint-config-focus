module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
    },
    settings: {
        'import/extensions': ['.js', '.jsx'],
    },
    'extends': ['eslint:recommended'],
    'plugins': [
        'eslint-plugin-react',
        'eslint-plugin-filenames',
        'eslint-plugin-import'
    ],
    'globals': {
        'jQuery': false,
        '$': true,
        'Focus': true,
        'FocusComponents': true,
        'require': true,
        'Backbone': true,
        'React': true,
        'Fmk': true,
        '_': true,
        'Promise': true,
        'module': true
    },
    'env': {
        'browser': true,
        'node': true
    },
    'rules': {
        /* Import Plugin (recommended conf)*/
        // analysis/correctness
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        // red flags (thus, warnings)
        'import/no-named-as-default': 'warn',
        'import/no-named-as-default-member': 'warn',
        'import/no-duplicates': 'warn',
        'import/unambiguous': 'warn',
        /* Filename Plugin */
        'filenames/match-regex': ['error', '^[a-z\-]+$'],
        //'filenames/match-exported': ['error', 'kebab'],
        //'filenames/no-index': 'error', // Could be a good idea
        /* React Plugin */
        'react/display-name': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-max-props-per-line': ['error', { 'maximum': 4 }],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'error',
        'react/jsx-no-undef': 'error',
        // 'react/jsx-sort-prop-types': 'error',
        // 'react/jsx-sort-props': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/no-danger': 'error',
        'react/no-did-mount-set-state': ['warn', 'disallow-in-func'],
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],
        'react/no-direct-mutation-state': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'error',
        'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
        'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
        'react/no-unknown-property': 'error',
        'react/prop-types': 'error',
        'react/require-render-return': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        /* Comments */
        'require-jsdoc': ['error', {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true,
                'ArrowFunctionExpression': true
            }
        }],
        'valid-jsdoc': [
            'error',
            {
                'requireParamDescription': true,
                'requireReturn': false
            }
        ],
        /* General */
        'quotes': ['error', 'single', 'avoid-escape'],
        'eqeqeq': 'error',
        'strict': 'error',
        'camelcase': 'error',
        'no-underscore-dangle': 'off',
        'new-cap': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'comma-dangle': 'error',
        'no-var': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'comma-style': ['error', 'last'],
        'func-names': 'error',
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'max-nested-callbacks': ['error', 3],
        'no-multiple-empty-lines': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-use-before-define': 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'no-alert': 'error',
        'no-console': 'off',
        'no-eval': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-native-reassign': 'error',
        'no-multi-str': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-warning-comments': ['warn', { 'terms': ['todo', 'fixme'], 'location': 'anywhere' }],
        'radix': 'error',
        'wrap-iife': 'error',
        'no-constant-condition': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'space-before-blocks': 'error',
        'arrow-spacing': 'error'
    }
};
