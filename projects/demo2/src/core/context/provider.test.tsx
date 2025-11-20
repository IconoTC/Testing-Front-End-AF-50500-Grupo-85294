import { render, screen } from '@testing-library/react';
import { AppContextProvider } from './provider';
import { useContext } from 'react';
import { AppContext } from './context';

describe('AppContext Provider', () => {
    const TestComponent: React.FC = () => {
        const { theme } = useContext(AppContext);
        return <div>{theme}</div>;
    };

    test('should first', () => {
        render(
            <AppContextProvider>
                <TestComponent />
            </AppContextProvider>
        );

        const divElement = screen.getByText('light');
        expect(divElement?.textContent).toBe('light');
    });
});
