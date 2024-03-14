module.exports = {
    root: true,
    plugins: ['import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        errorOnTypeScriptSyntacticAndSemanticIssues: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    },
    rules: {
        'import/no-deprecated': 'error',
    },
};
