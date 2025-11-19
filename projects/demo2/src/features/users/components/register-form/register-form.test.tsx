import { render, screen } from "@testing-library/react";
import { RegisterForm } from "./register-form";
import userEvent from "@testing-library/user-event";
import type { Register } from "../../types/register";
import { registerUser } from "../../services/user-data";

vi.mock('../../services/user-data', () => ({
    registerUser: vi.fn(),
}));

const mockData: Register = {
    username: 'testUser',
    email: 'test@example.com',
    password: 'password123',
    isOkConditions: true,
    turn: 'N',
    course: 'A',
};

describe('RegisterForm Component', () => {
    test('should run a placeholder test', async () => {

        render(<RegisterForm />);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
        const iUserName = screen.getByRole('textbox', { name: /username/i });
        const iEmail = screen.getByRole('textbox', { name: /email/i });
        const iPassword = screen.getByRole('textbox', { name: /password/i });
        const cConditions = screen.getByRole('checkbox', { name: /conditions/i });
        const rTurnM = screen.getByRole('radio', { name: /turnM/i });
        const rTurnT = screen.getByRole('radio', { name: /turnT/i });
        const rTurnN = screen.getByRole('radio', { name: /turnN/i });
        const sCourse = screen.getByRole('combobox', { name: /course/i });
        const bSubmit = screen.getByRole('button', { name: /enviar/i });
        expect(iUserName).toBeInTheDocument();
        expect(iEmail).toBeInTheDocument();        
        expect(iPassword).toBeInTheDocument();
        expect(cConditions).toBeInTheDocument();
        expect(rTurnM).toBeInTheDocument();
        expect(rTurnT).toBeInTheDocument();
        expect(rTurnN).toBeInTheDocument();
        expect(sCourse).toBeInTheDocument();        
        expect(bSubmit).toBeInTheDocument();

        await userEvent.type(iUserName, mockData.username);
        await userEvent.type(iEmail, mockData.email);
        await userEvent.type(iPassword, mockData.password);
        await userEvent.click(cConditions);
        await userEvent.click(rTurnN);
        await userEvent.selectOptions(sCourse, mockData.course);

        expect(iUserName).toHaveValue(mockData.username);
        expect(iEmail).toHaveValue(mockData.email);
        expect(iPassword).toHaveValue(mockData.password);
        expect(cConditions).toBeChecked();
        expect(rTurnN).toBeChecked();
        expect(sCourse).toHaveValue(mockData.course);

        await userEvent.click(bSubmit);
        expect(registerUser).toHaveBeenCalledWith(mockData);
    });
});
