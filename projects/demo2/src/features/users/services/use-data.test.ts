import type { Mock } from 'vitest';
import { registerUser } from './user-data';
import type { Register } from '../types/register';

const url = 'https://jsonplaceholder.typicode.com/users';

describe('registerUser function', () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should register user data correctly', async () => {
        const mockData = {
            username: 'Pepe Pérez',
        } as Register;

        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({
                ...mockData,
                id: 1,
            }),
        });

        const data = await registerUser(mockData);

        expect(fetch).toHaveBeenCalledWith(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mockData),
        });

        expect(data).toBeDefined();
        expect(data.id).toBe(1);
        expect(data.username).toBe('Pepe Pérez');
    });

    // test('should throw an error when response is not ok', async () => {
    //     (globalThis.fetch as Mock).mockResolvedValue({
    //         ok: false,
    //     });

    //     await expect(getUserWithFetch()).rejects.toThrow(
    //         'Network response was not ok'
    //     );
    // });
});

// describe('getUserWithFetch function with spies (mock)', () => {
//     afterEach(() => {
//         vi.restoreAllMocks();
//     });

//     test('should fetch user data correctly using spyOn', async () => {
//         const mockData = {
//             id: 1,
//             name: 'Ana Gómez',
//         };

//         vi.spyOn(globalThis, 'fetch').mockResolvedValue({
//             ok: true,
//             json: vi.fn().mockResolvedValue({ ...mockData }),
//         } as unknown as Response);

//         const data = await getUserWithFetch();
//         expect(data).toBeDefined();
//         expect(data.id).toBe(1);
//         expect(data).toStrictEqual(mockData);
//         expect(fetch).toHaveBeenCalledTimes(1);
//     });

//     test('should throw an error when response is not ok', async () => {
//         vi.spyOn(globalThis, 'fetch').mockResolvedValue({
//             ok: false,
//         } as unknown as Response);

//         await expect(getUserWithFetch()).rejects.toThrow(
//             'Network response was not ok'
//         );
//     });
// });
