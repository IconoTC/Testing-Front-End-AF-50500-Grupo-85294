import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter Component', () => {
    let buttonElement: HTMLElement;
    beforeEach(() => {
        render(<Counter />);
        buttonElement = screen.getByRole('button');
    });

    test('should render the counter with correct initial count', () => {
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('count is 0');
    });

    test('should increment count on button click', () => {
        act(() => {
            /* fire events that update state */
            buttonElement.click();
        });
        expect(buttonElement).toHaveTextContent('count is 1');
    });

    test('should increment count on button click (fireEvent)', () => {
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('count is 1');
    });
        test('should increment count on button click (userEvent)', async () => {
        await userEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('count is 1');
    });
});
