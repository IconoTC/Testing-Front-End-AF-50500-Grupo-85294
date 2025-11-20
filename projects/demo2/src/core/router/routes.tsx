import type { RouteObject } from 'react-router';
import { App } from '../components/app/App';
import { HomePage } from '../../features/home/home-page';
import { AboutPage } from '../../features/about/about-page';
import { UsersPage } from '../../features/users/users-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: App,
        children: [
            {
                //path: '/',
                index: true,
                Component: HomePage,
            },
            {
                path: '/home',
                Component: HomePage,
            },
            {
                path: '/users',
                Component: UsersPage,
            },
            {
                path: '/todo',
                lazy: {
                    Component: async () =>
                        (await import('../../features/todo/todo-page'))
                            .TodoPage,
                },
            },
            {
                path: '/about',
                Component: AboutPage,
            },
            {
                path: '*',
                Component: () => <h2>404 - Not Found</h2>,
            },
        ],
    },
];
