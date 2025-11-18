import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card Component', () => {
    test('should render the card with correct text', () => {
        render(<Card>Card content</Card>);
        const cardElement = screen.getByRole('region');
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent('Card content');
    });
    test('should render the card with correct text and title', () => {
        render(<Card title="Card Title">Card content</Card>);
        const cardElement = screen.getByRole('region', { name: /Card Title card/i });
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent('Card content');
        const titleElement = screen.getByRole('heading', { name: /Card Title/i });
        expect(titleElement).toBeInTheDocument();
    });
});
