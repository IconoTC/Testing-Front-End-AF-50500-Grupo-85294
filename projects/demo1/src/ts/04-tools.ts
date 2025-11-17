export const isNaturaPositive = (n: number): void => {
    if (n < 0) {
        throw new Error('Un número negativo no tiene factorial');
    }

    if (!Number.isInteger(n)) {
        throw new Error('Un número decimal no tiene factorial');
    }
};

export const isGreaterThan = (n: number, limit: number): void => {
    if (n > limit) {
        throw new Error('Número demasiado grande');
    }
};
