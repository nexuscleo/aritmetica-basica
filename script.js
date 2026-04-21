/**
 * Lógica de renderização da Dashboard Math Explorer
 */

const mathOperations = [
    { cat: "Aritmética Básica", name: "Soma", code: "10 + 3", res: 10 + 3 },
    { cat: "Aritmética Básica", name: "Subtração", code: "10 - 3", res: 10 - 3 },
    { cat: "Aritmética Básica", name: "Multiplicação", code: "10 * 3", res: 10 * 3 },
    { cat: "Aritmética Básica", name: "Divisão", code: "10 / 3", res: (10 / 3).toFixed(2) },
    { cat: "Aritmética Básica", name: "Exponenciação", code: "10 ** 3", res: 10 ** 3 },
    { cat: "Aritmética Básica", name: "Módulo (Resto)", code: "10 % 3", res: 10 % 3 },
    
    { cat: "Objeto Math", name: "Arredondar (Round)", code: "Math.round(4.7)", res: Math.round(4.7) },
    { cat: "Objeto Math", name: "Piso (Floor)", code: "Math.floor(4.7)", res: Math.floor(4.7) },
    { cat: "Objeto Math", name: "Teto (Ceil)", code: "Math.ceil(4.1)", res: Math.ceil(4.1) },
    { cat: "Objeto Math", name: "Raiz Quadrada", code: "Math.sqrt(64)", res: Math.sqrt(64) },
    { cat: "Objeto Math", name: "Valor Absoluto", code: "Math.abs(-10)", res: Math.abs(-10) },
    { cat: "Objeto Math", name: "Máximo", code: "Math.max(5, 10, 2)", res: Math.max(5, 10, 2) },
    
    { cat: "Trigonometria & Constantes", name: "Constante PI", code: "Math.PI", res: Math.PI.toFixed(5) },
    { cat: "Trigonometria & Constantes", name: "Seno (90°)", code: "Math.sin(90 * PI / 180)", res: Math.sin(90 * Math.PI / 180).toFixed(2) },
    
    { cat: "Aleatoriedade", name: "Número Aleatório", code: "Math.random()", res: Math.random().toFixed(4) },
    { cat: "Aleatoriedade", name: "Inteiro (1 a 10)", code: "Math.floor(Math.random() * 10) + 1", res: Math.floor(Math.random() * 10) + 1 },

    { cat: "operadores de Comparação", name: "Igualdade (==)", code: "5 == '5'", res: 5 == '5' },
    { cat: "operadores de Comparação", name: "Estritamente Igual (===)", code: "5 === '5'", res: 5 === '5' },
    { cat: "operadores de Comparação", name: "Diferente (!=)", code: "5 != '5'", res: 5 != '5' },
    { cat: "operadores de Comparação", name: "Estritamente Diferente (!==)", code: "5 !== '5'", res: 5 !== '5' },
    { cat: "operadores de Comparação", name: "Maior que (>)", code: "5 > 3", res: 5 > 3 },
    { cat: "operadores de Comparação", name: "Menor que (<)", code: "5 < 3", res: 5 < 3 },
    { cat: "operadores de Comparação", name: "Maior ou Igual (>=)", code: "5 >= 5", res: 5 >= 5 },
    { cat: "operadores de Comparação", name: "Menor ou Igual (<=)", code: "5 <= 3", res: 5 <= 3 }
];

const container = document.getElementById('main-container');
let currentCat = "";

mathOperations.forEach(op => {
    // Adiciona título de categoria se mudar
    if (op.cat !== currentCat) {
        currentCat = op.cat;
        const title = document.createElement('div');
        title.className = 'section-title';
        title.innerText = currentCat;
        container.appendChild(title);
    }

    // Cria o elemento do card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Estrutura interna do card usando template strings
    card.innerHTML = `
        <div>
            <div class="card-header">${op.name}</div>
            <div class="code-block"><code>${op.code}</code></div>
        </div>
        <div>
            <div class="result-label">Resultado:</div>
            <div class="result-value">${op.res}</div>
        </div>
    `;
    
    // Insere o card no container principal do HTML
    container.appendChild(card);
});

// Atualiza o ano corrente dinamicamente
document.getElementById('current-year').textContent = new Date().getFullYear();