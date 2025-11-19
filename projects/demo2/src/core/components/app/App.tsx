import './App.css';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import type { JSX } from 'react';
import { Outlet } from 'react-router';
import { Menu } from '../menu/menu';

export function App(): JSX.Element {
    const title = 'TS + React + Vitest Demo 2';
    return (
        <>
            <Header appTitle={title}>
               <Menu />
            </Header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
