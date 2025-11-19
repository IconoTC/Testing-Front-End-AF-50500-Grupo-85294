import React from 'react';
import { RegisterForm } from './components/register-form/register-form';

export const UsersPage: React.FC = () => {
    return (
        <section>
            <h2>Users Page</h2>
            <RegisterForm />
        </section>
    );
};
