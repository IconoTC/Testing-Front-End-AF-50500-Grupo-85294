import { factorial } from './04-factorial';

describe('Calculate factorial', () => {
    test('Factorial of 0 should be 1', () => {
        const r = factorial(0);
        expect(r).toBe(1);
    });
    test('Factorial of 1 should be 1', () => {
        const r = factorial(1);
        expect(r).toBe(1);
    });
    test('Factorial of 3 should be 6', () => {
        const r = factorial(3);
        expect(r).toBe(6);
    });
    test('Factorial of 5 should be 120', () => {
        const r = factorial(5);
        expect(r).toBe(120);
    });
    test('Factorial of 170 should be 7.257415615308004e+306', () => {
        console.log(Number.MAX_VALUE);
        const r = factorial(170);
        expect(r).toBe(7.257415615308004e306);
    });
    test('Factorial of 171 should throw an error', () => {
        console.log(Number.MAX_VALUE);
        expect(() => factorial(171)).toThrow('Número demasiado grande');
    });
    test('Factorial of -5 should throw an error', () => {
        expect(() => factorial(-5)).toThrow(
            'Un número negativo no tiene factorial'
        );
    });
    test('Factorial of 1.5 should throw an error', () => {
        expect(() => factorial(1.5)).toThrow(
            'Un número decimal no tiene factorial'
        );
    });
});
