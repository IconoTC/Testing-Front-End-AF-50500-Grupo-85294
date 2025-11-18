import { fetchData, fetchDataPromise } from './05-async';

describe('fetchData Tests', () => {
    test('should return data', () => {
        const fn = (data: string): void => {
            expect(data).toBe('Fetched Data');
        };
        fetchData(fn);
    });
});

describe('fetchDataPromise Tests', () => {
    test('should return data from promise', async () => {
        const data = await fetchDataPromise();
        expect(data).toBe('sample data');
    });

    test('should handle error from promise', async () => {
        expect(fetchDataPromise(true)).rejects.toThrow('error fetching data');
    });

    // Usando then y catch

    test('should return data from promise with then', () => {
        return fetchDataPromise().then((data) => {
            expect(data).toBe('sample data');
        });
    });

    test('should handle error from promise with catch', () => {
        return fetchDataPromise(true).catch((error) => {
            expect(error.message).toBe('error fetching data');
        });
    });
});
