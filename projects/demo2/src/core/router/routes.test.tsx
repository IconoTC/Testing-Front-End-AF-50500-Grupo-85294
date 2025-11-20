import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from './routes';
import { render, screen, waitFor } from '@testing-library/react';
import { HomePage } from '../../features/home/home-page';
import { TodoPage } from '../../features/todo/todo-page';
import { AboutPage } from '../../features/about/about-page';
import { UsersPage } from '../../features/users/users-page';

vi.mock('../../features/home/home-page');
vi.mock('../../features/todo/todo-page');
vi.mock('../../features/about/about-page');
vi.mock('../../features/users/users-page');

describe('Router routes', () => {
    test('should route to home page when path is /', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(HomePage).toHaveBeenCalled();
    });
    test('should route to home page when path is /home', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/home'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(HomePage).toHaveBeenCalled();
    });
        test('should route to users page', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/users'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(UsersPage).toHaveBeenCalled();
    });
    test('should route to todo page (lazy route)', async () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/todo'],
        });
        render(<RouterProvider router={mockRouter} />);
        await waitFor(() => {
            expect(TodoPage).toHaveBeenCalled();
        });
    });
    test('should route to about page', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/about'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(AboutPage).toHaveBeenCalled();
    });
    test('should render info for invalid routes', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/invalid-route'],
        });
        render(<RouterProvider router={router} />);

        const element = screen.getByText('404 - Not Found');
        expect(element).toBeInTheDocument();
    });
});
