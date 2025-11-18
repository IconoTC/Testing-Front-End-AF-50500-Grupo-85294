import { Footer } from "./footer";
import { render, screen} from '@testing-library/react'

describe('Footer Component', () => {
    test('should render the footer with correct text', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
        expect(footerElement).toHaveTextContent('Click on');
    });
});
