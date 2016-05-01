module.exports = {
    'extends': '25th',
    'parser': 'babel-eslint',
    'env': {
        'jest': true
    },
    'rules': {
        'react/jsx-no-bind': [2, {
            'ignoreRefs': true,
        }],
        'no-use-before-define': 0,
    }
};