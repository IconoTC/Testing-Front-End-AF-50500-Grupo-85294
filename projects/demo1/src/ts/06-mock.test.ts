const mock = vi.fn();

describe('Mock examples', () => {
    test('should call mock function with correct arguments', () => {
        const result = mock('Hello', 42);
        expect(mock).toHaveBeenCalledWith('Hello', 42);
        expect(result).toBeUndefined();
    });
    test('should return specific value from mock function', () => {
        mock.mockReturnValue('Mocked Value');
        const result = mock();
        expect(result).toBe('Mocked Value');
        expect(mock).toHaveBeenCalled();
    });

    test('should implement custom logic in mock function', () => {
        mock.mockImplementation((a: number, b: number) => a + b);
        const result = mock(5, 10);
        expect(result).toBe(15);
        expect(mock).toHaveBeenCalledWith(5, 10);
    });

    test('should return specific value from mock function promise', async () => {
        mock.mockResolvedValue('Mocked Value');
        const result = await mock();
        expect(result).toBe('Mocked Value');
        expect(mock).toHaveBeenCalled();
    });
});
