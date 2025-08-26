import { somar, subtrair, multiplicar, dividir } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        //AAA
        //Arrange (preparar)
        const a = 2;
        const b = 3;

        // Act ( Executar)
        const resultado = somar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    });
    test("Deve subtrair dois números corretamente", () => {
        //AAA
        //Arrange (preparar)
        const a = 13;
        const b = 3;

        // Act ( Executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(10);
    });
    test("Deve multiplicar dois números corretamente", () => {
        //AAA
        //Arrange (preparar)
        const a = 10;
        const b = 4;

        // Act ( Executar)
        const resultado = multiplicar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(40);
    });
    test("Deve dividir dois números corretamente", () => {
        //AAA
        //Arrange (preparar)
        const a = 10;
        const b = 5;

        // Act ( Executar)
        const resultado = dividir(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(2);
    });
    test("Deve lançar erro ao dividir por zero", () => {
        expect(() => {
            dividir(10, 0);
        }).toThrow("Divisão por zero não é permitida.");
    });
});
