import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import { createRoutesStub } from 'react-router';
import type { JSX } from 'react';

describe('Menu Component', () => {
    const Stub = createRoutesStub([
        {
            path: '/',
            Component: (): JSX.Element => <Menu />,
        },
    ]);

    test('should render menu with correct links', () => {
        render(<Stub initialEntries={['/']} />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(4);
        expect(links[0]).toHaveTextContent('Home');
        expect(links[0]).toHaveAttribute('href', '/');
        expect(links[1]).toHaveTextContent('Users');
        expect(links[1]).toHaveAttribute('href', '/users');
        expect(links[2]).toHaveTextContent('Todo');
        expect(links[2]).toHaveAttribute('href', '/todo');
        expect(links[3]).toHaveTextContent('About');
        expect(links[3]).toHaveAttribute('href', '/about');
    });
});
