import React from 'react';
import type { Register } from '../../types/register';
import { registerUser } from '../../services/user-data';

export const RegisterForm: React.FC = () => {
    const initialState: Register = {
        username: '',
        email: '',
        password: '',
        isOkConditions: false,
        turn: 'M',
        course: 'A',
    };

    const [userData, setUserData] = React.useState<Register>(initialState);
    const [result, setResult] = React.useState<string>('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        const { name, value, type } = event.target;
        const checked = (event.target as HTMLInputElement).checked;

        const fieldValue = type === 'checkbox' ? checked : value;
        // // Aquí iría la lógica para actualizar el estado del formulario
        setUserData({
            ...userData,
            [name]: fieldValue,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        registerUser(userData).then(() => {
            setResult('Registration successful');
        });
    };

    return (
        <form role="form" aria-label="Register Form" onSubmit={handleSubmit}>
            <h3>Registro en el curso</h3>
            <p>Ejemplo de 'Controlled Form'</p>

            {result && <p>{result}</p>}

            <div className="group-control">
                <input
                    type="text"
                    name="username"
                    placeholder="Dime tu nombre"
                    aria-label="username"
                    required
                    value={userData.username}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="email"
                    name="email"
                    placeholder="Dime tu email"
                    aria-label="email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="password"
                    name="password"
                    role="textbox"
                    placeholder="Dime tu password"
                    aria-label="password"
                    required
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="checkbox"
                    name="isOkConditions"
                    aria-label="conditions"
                    id="is-ok"
                    checked={userData.isOkConditions}
                    onChange={handleChange}
                />
                <label htmlFor="is-ok">Acepto las condiciones...</label>
            </div>

            <fieldset name="turn">
                <legend>Selecciona un turno</legend>
                <input
                    type="radio"
                    name="turn"
                    aria-label="turnM"
                    id="turno-m"
                    value="M"
                    onChange={handleChange}
                />
                <label htmlFor="turno-m">Mañana</label>
                <input
                    type="radio"
                    name="turn"
                    aria-label="turnT"
                    id="turno-t"
                    value="T"
                    onChange={handleChange}
                />
                <label htmlFor="turno-t">Tarde</label>
                <input
                    type="radio"
                    name="turn"
                    aria-label="turnN"
                    id="turno-n"
                    value="N"
                    onChange={handleChange}
                />
                <label htmlFor="turno-n">Noche</label>
            </fieldset>

            <label htmlFor="course">Elige un curso</label>
            <select
                name="course"
                aria-label="course"
                id="course"
                value={userData.course}
                onChange={handleChange}
            >
                <option value=""></option>
                <option value="A">Angular</option>
                <option value="R">React</option>
                <option value="N">Node</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
};
