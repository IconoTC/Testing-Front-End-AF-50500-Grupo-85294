import React from 'react';
import './footer.css';

export const Footer: React.FC = () => {

    const info = "Click on the Vite and React logos to learn more";

    return (
        <footer>
            <p className="read-the-docs">
                {info}
            </p>
        </footer>
    );
};
