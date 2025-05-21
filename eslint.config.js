import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
    { 
        ignores: [
            'node_modules/**',
            'dist/**',
            'coverage/**',
            '*.local',
            '.vscode/**',
            '.idea/**',
            '.DS_Store'
        ] 
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true }
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                React: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        files: ['tests/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.jest,
                React: 'readonly',
                JSX: 'readonly'
            },
            parserOptions: {
                project: './tsconfig.test.json'
            }
        },
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off'
        }
    }
];
