export default {
    'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    'src/**/*.{css,md,json}': ['prettier --write'],
    '*.{js,jsx,ts,tsx,css,md,json}': ['prettier --write'],
};
