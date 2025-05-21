import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['@testing-library/jest-dom'],
        coverage: {
            reporter: ['text', 'html', 'lcov'],
            exclude: ['coverage/**'],
            include: ['src/**/*.{js,jsx}'],
        },
        include: ['tests/**/*.{test,spec}.{js,jsx}']
    }
}); 