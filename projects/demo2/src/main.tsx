import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './core/router/routes';

const root = document.getElementById('root') as HTMLElement;

const appRouter = createBrowserRouter(routes)

createRoot(root).render(
    <StrictMode>
       <RouterProvider router={appRouter} />
    </StrictMode>
);
