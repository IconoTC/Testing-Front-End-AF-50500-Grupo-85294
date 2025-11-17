import { add, product } from "./01-calc";

describe('add function', () => {  
    
    test('should return 5 if sum numbers 2 & 3', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('should return 0 if sum numbers 0 & 0', () => {
        const result = add(0, 0);
        expect(result).toBe(0);
    });

})

describe('Given function multiply', () => {
    describe('When called with 2 and 3', () => {
        test('Then it should return 6', () => {
            // Arrange
            const a = 2;
            const b = 3;
            const expected = 6;

            // Act
            const result = product(a, b);

            // Assert
            expect(result).toBe(expected);
        });
    });
      describe('When called with 1 and 0', () => {
        test('Then it should return 0', () => {
            // Arrange
            const a = 1;
            const b = 0;
            const expected = 0;

            // Act
            const result = product(a, b);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
