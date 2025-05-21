import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,        
        coverage: {
            reporter: ['text', 'html', 'lcov'],
            exclude: ['coverage/**'],
            include: ['src/**/*.{ts,tsx}'],
        },
        include: ['tests/**/*.{test,spec}.{ts,tsx}'],
        typecheck: {
            tsconfig: './tsconfig.test.json'
        }
    },
    esbuild: {
        jsx: 'automatic',
    },
}); 