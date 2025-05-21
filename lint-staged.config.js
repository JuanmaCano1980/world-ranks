export default {
    '*.{js,jsx,ts,tsx}': (files) => {
        const filteredFiles = files.filter(file => !file.includes('coverage/'));
        if (filteredFiles.length === 0) return [];
        return [
            'eslint --fix --max-warnings=0',
            'tsc-files --noEmit'
        ];
    },
    '*.{json,md}': (files) => {
        const filteredFiles = files.filter(file => !file.includes('coverage/'));
        if (filteredFiles.length === 0) return [];
        return ['prettier --write --parser json'];
    }
};
