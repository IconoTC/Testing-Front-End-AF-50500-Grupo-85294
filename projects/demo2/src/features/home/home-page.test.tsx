import { render, screen } from '@testing-library/react';
import { HomePage } from './home-page';
import { AppContext, type AppContextType } from '../../core/context/context';


describe('Home Page', () => {
    test('should render correctly', () => {
        render(
            <AppContext.Provider value={{ theme: 'light'} as AppContextType}>
                <HomePage />
            </AppContext.Provider>
        );
        const eHeader = screen.getByRole('heading', { level: 2 });
        expect(eHeader.textContent).toBe('Home Page');
        const eRegion = screen.getByRole('region', {
            name: 'Home Page Section',
        });
        expect(eRegion).toHaveClass('page-light');
    });
});
