import type { Register } from "../types/register";

const api = 'https://jsonplaceholder.typicode.com/users'


export type User = {id: string } & Register;

export const registerUser = (userData: Register): Promise<User> => {
    
    return fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('User registered successfully:', data);
        return data as User;
    })
    // .catch(error => {
    //     console.error('There was a problem with the registration:', error);
    // });
}
