import './App.css';
import { Counter } from '../counter/counter';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import type { JSX } from 'react';

export function App(): JSX.Element {
    const title = 'TS + React + Vitest Demo 2';
    return (
        <>
            <Header appTitle={title} />
            <Counter />
            <Footer />
        </>
    );
}

