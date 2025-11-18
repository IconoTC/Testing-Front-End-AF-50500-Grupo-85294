
import { render, screen} from '@testing-library/react'
import { Header } from "./header";

describe('Header Component', () => {
    test('should render the header with correct title', () => {
        render(<Header appTitle="Test Title" />);
        const h1Element = screen.getByRole('heading', { 
            level: 1, 
            name: 'Test Title'
        });
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent('Test Title');
    });
});
