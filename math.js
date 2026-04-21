/**
 * Exemplo Completo de Operações Matemáticas em JavaScript
 * testar algo rápido e ver o resultado no terminal
 * manual de consulta para operadores e funções matemáticas
 */

// 1. Operadores Aritméticos Básicos
let a = 10;
let b = 3;

console.log("--- Operadores Básicos ---");
console.log(`Soma (${a} + ${b}):`, a + b);               // Adição
console.log(`Subtração (${a} - ${b}):`, a - b);          // Subtração
console.log(`Multiplicação (${a} * ${b}):`, a * b);      // Multiplicação
console.log(`Divisão (${a} / ${b}):`, a / b);            // Divisão
console.log(`Resto da Divisão (${a} % ${b}):`, a % b);   // Módulo (Resto)
console.log(`Exponenciação (${a} ** ${b}):`, a ** b);    // Potência (ES6)

// 2. Incremento e Decremento
let c = 5;
console.log("\n--- Incremento e Decremento ---");
console.log("Valor inicial:", c);
c++; // c = c + 1
console.log("Após incremento (c++):", c);
c--; // c = c - 1
console.log("Após decremento (c--):", c);

// 3. Atribuição Composta (Shorthand)
let d = 10;
console.log("\n--- Atribuição Composta ---");
d += 5; // d = d + 5
console.log("Soma composta (d += 5):", d);
d *= 2; // d = d * 2
console.log("Multiplicação composta (d *= 2):", d);

// 4. O Objeto Math (Funções Integradas)
console.log("\n--- Objeto Math ---");

// Constantes
console.log("Valor de PI:", Math.PI);

// Arredondamentos
let num = 4.7;
console.log(`Número base: ${num}`);
console.log("Arredondar para o mais próximo (Math.round):", Math.round(num)); // 5
console.log("Arredondar para baixo (Math.floor):", Math.floor(num));           // 4
console.log("Arredondar para cima (Math.ceil):", Math.ceil(num));              // 5
console.log("Remover decimais (Math.trunc):", Math.trunc(num));                // 4

// Raiz Quadrada e Cúbica
console.log("Raiz Quadrada de 64 (Math.sqrt):", Math.sqrt(64));
console.log("Raiz Cúbica de 27 (Math.cbrt):", Math.cbrt(27));

// Potência (Alternativa ao **)
console.log("2 elevado a 3 (Math.pow):", Math.pow(2, 3));

// Valor Absoluto (Sempre positivo)
console.log("Valor absoluto de -10 (Math.abs):", Math.abs(-10));

// Mínimo e Máximo
console.log("Menor valor entre (5, 10, 2, 8):", Math.min(5, 10, 2, 8));
console.log("Maior valor entre (5, 10, 2, 8):", Math.max(5, 10, 2, 8));

// Geração de Números Aleatórios
let random = Math.random(); // Gera entre 0 e 0.999...
console.log("Número aleatório entre 0 e 1:", random);

// Exemplo: Inteiro aleatório entre 1 e 10
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Número inteiro aleatório entre 1 e 10:", randomInt);

// 5. Trigonometria (em Radianos)
console.log("\n--- Trigonometria ---");
console.log("Seno de 90 graus:", Math.sin(90 * Math.PI / 180)); // Converte para radianos
console.log("Cosseno de 0:", Math.cos(0));

// 6. Verificações Especiais
console.log("\n--- Verificações ---");
console.log("É um número finito?:", Number.isFinite(10 / 0)); // false
console.log("É 'Not a Number' (NaN)?:", Number.isNaN("texto" * 2)); // true

// 7. Operadores de Comparação
console.log("\n--- Operadores de Comparação ---");
console.log("Igualdade (5 == '5'):", 5 == '5'); // true
console.log("Estritamente Igual (5 === '5'):", 5 === '5'); // false
console.log("Diferente (5 != '5'):", 5 != '5'); // false
console.log("Estritamente Diferente (5 !== '5'):", 5 !== '5'); // true
console.log("Maior que (5 > 3):", 5 > 3); // true
console.log("Menor que (5 < 3):", 5 < 3); // false
console.log("Maior ou Igual (5 >= 5):", 5 >= 5); // true
console.log("Menor ou Igual (5 <= 3):", 5 <= 3); // false

// 8. Operadores Lógicos
console.log("\n--- Operadores Lógicos ---");
console.log("AND (true && false):", true && false); // false
console.log("OR (true || false):", true || false); // true
console.log("NOT (!true):", !true); // false