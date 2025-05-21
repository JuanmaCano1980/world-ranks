import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    test('renders World Ranks heading', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { name: /world ranks/i });
        expect(heading).toBeTruthy();
    });
}); 