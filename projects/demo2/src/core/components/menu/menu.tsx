import React from 'react';
import './menu.css';
import { Link } from 'react-router';
import type { MenuOption } from '../app/App';

type Props = {
    menuOptions: MenuOption[]
};

export const Menu: React.FC<Props> = ({ menuOptions }) => {
    return (
        <nav>
            <ul>
                {menuOptions.map(option => (
                    <li key={option.path}>
                        <Link to={option.path}>{option.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
