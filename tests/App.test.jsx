import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    test('renders World Ranks heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: /world ranks/i })).toBeInTheDocument();
    });
});
