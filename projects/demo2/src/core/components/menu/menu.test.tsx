import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import { createRoutesStub } from 'react-router';
import type { JSX } from 'react';
import type { MenuOption } from '../app/App';

const menuOptions: MenuOption[] = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
];

describe('Menu Component', () => {
    const Stub = createRoutesStub([
        {
            path: '/',
            Component: (): JSX.Element => <Menu menuOptions={menuOptions} />,
        },
    ]);

    test('should render menu with correct links', () => {
        render(<Stub initialEntries={['/']} />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
        expect(links[0]).toHaveTextContent('Home');
        expect(links[0]).toHaveAttribute('href', '/');
        expect(links[1]).toHaveTextContent('Products');
        expect(links[1]).toHaveAttribute('href', '/products');
        expect(links[2]).toHaveTextContent('About');
        expect(links[2]).toHaveAttribute('href', '/about');
    });
});
