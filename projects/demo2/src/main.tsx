import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './core/components/app/App.tsx';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);
