import { render, waitFor } from '@testing-library/react';
import { App } from './App';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { routes } from '../../router/routes';
import { HomePage } from '../../../features/home/home-page';
import { TodoPage } from '../../../features/todo/todo-page';
import { AboutPage } from '../../../features/about/about-page';
import { UsersPage } from '../../../features/users/users-page';

vi.mock('../footer/footer');
vi.mock('../header/header');

vi.mock('../../../features/home/home-page');
vi.mock('../../../features/todo/todo-page');
vi.mock('../../../features/about/about-page');
vi.mock('../../../features/users/users-page');

describe('App component', () => {
    test('should render and call layout components', () => {
        render(<App />);
        // expect(Header).toHaveBeenCalledWith({ appTitle: 'TS + React + Vitest Demo 2' }, undefined);
        // expect(Footer).toHaveBeenCalledWith({}, undefined);
        expect(Footer).toHaveBeenCalled();
        expect(Header).toHaveBeenCalled();
    });

    test('The routes component render the Home Page', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(HomePage).toHaveBeenCalled();
    });

    test('The routes component render the Users Page', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/users'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(UsersPage).toHaveBeenCalled();
    });


    test('The routes component render the Todo Page (lazy route)', async () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/todo'],
        });
        render(<RouterProvider router={mockRouter} />);
        await waitFor(() => {
            expect(TodoPage).toHaveBeenCalled();
        });
    });

    test('The routes component render the About Page', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/about'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(AboutPage).toHaveBeenCalled();
    });
});
