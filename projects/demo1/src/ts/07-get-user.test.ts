import type { Mock } from 'vitest';
import axios from 'axios';
import { getUserWithAxios } from './07-get-user';
import { getUserWithFetch } from './07-get-user';
const mockedGetAxios = axios.get as Mock;

vi.mock('axios');

const url = 'https://jsonplaceholder.typicode.com/users/1';

describe('getUserWithAxios function', () => {
    test('should fetch user data correctly', async () => {
        const mockData = {
            id: 1,
            name: 'Leanne Graham',
        };
        mockedGetAxios.mockResolvedValue({ data: mockData });

        const user = await getUserWithAxios();
        expect(user).toBeDefined();
        expect(user).toEqual(mockData);
        expect(mockedGetAxios).toHaveBeenCalledWith(url);
    });
});

describe('getUserWithFetch function with mocks', () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should fetch user data correctly', async () => {
        const mockData = {
            id: 1,
            name: 'Pepe Pérez',
        };

        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(mockData),
        });

        const data = await getUserWithFetch();
        expect(data).toBeDefined();
        expect(data.id).toBe(1);
        expect(data.name).toBe('Pepe Pérez');
    });

    test('should throw an error when response is not ok', async () => {
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: false,
        });

        await expect(getUserWithFetch()).rejects.toThrow(
            'Network response was not ok'
        );
    });
});

describe('getUserWithFetch function with spies (mock)', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should fetch user data correctly using spyOn', async () => {
        const mockData = {
            id: 1,
            name: 'Ana Gómez',
        };

        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({ ...mockData }),
        } as unknown as Response);

        const data = await getUserWithFetch();
        expect(data).toBeDefined();
        expect(data.id).toBe(1);
        expect(data).toStrictEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('should throw an error when response is not ok', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: false,
        } as unknown as Response);

        await expect(getUserWithFetch()).rejects.toThrow(
            'Network response was not ok'
        );
    });
});
