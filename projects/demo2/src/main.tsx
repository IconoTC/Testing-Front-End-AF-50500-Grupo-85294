import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './core/router/routes';
import { AppContextProvider } from './core/context/provider';

const root = document.getElementById('root') as HTMLElement;

const appRouter = createBrowserRouter(routes)

createRoot(root).render(
    <StrictMode>
        <AppContextProvider>
           <RouterProvider router={appRouter} />
        </AppContextProvider>
    </StrictMode>
);
