import './App.css';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import type { JSX } from 'react';
import { Outlet } from 'react-router';
import { Menu } from '../menu/menu';

export type MenuOption = {
    path: string;
    label: string;
}

export function App(): JSX.Element {
    const title = 'TS + React + Vitest Demo 2';

   const menuOptions: MenuOption[] = [
        {path: '/', label: 'Home'},
        {path: '/users', label: 'Users'},
        {path: '/todo', label: 'Todo'},
        {path: '/about', label: 'About'}, 
    ]

    return (
        <>
            <Header appTitle={title}>
               <Menu menuOptions={menuOptions}/>
            </Header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
