import { isGreaterThan, isNaturaPositive } from './04-tools';

export const factorial = (n: number): number => {
    isGreaterThan(n, 170);

    isNaturaPositive(n);

    if (n === 0) return 1;
    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
};
