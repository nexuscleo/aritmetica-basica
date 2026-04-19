# JS Math Explorer

Um projeto educacional e visual desenvolvido para demonstrar e testar as capacidades matemáticas integradas do JavaScript. Esta aplicação atua como uma "vitrine" interativa e um guia de referência rápido para operadores aritméticos, métodos do objeto `Math` e lógicas de comparação em JavaScript.

## 📁 Estrutura do Projeto

O projeto é composto por quatro arquivos principais:

### 1. `index.html`
Arquivo principal responsável pela estrutura da página. 
* Define o cabeçalho (Header) e rodapé (Footer) do site.
* Cria a `div` principal (`#main-container`) onde os "cards" das operações matemáticas serão injetados dinamicamente via JavaScript.
* Faz as importações dos arquivos de estilo (`style.css`) e de script (`script.js`).

### 2. `script.js`
Este é o script focado na **renderização do Dashboard (Interface Visual)**. Suas principais funções são:
* **Array `mathOperations`**: Contém um conjunto de objetos organizados por categoria (Aritmética Básica, Objeto Math, Trigonometria, etc.). Cada objeto armazena o nome da operação, o código JavaScript correspondente e o resultado dessa operação.
* **Geração Dinâmica de Interface**: O script itera (com `forEach`) sobre o array `mathOperations`. Para cada item:
    * Verifica se a categoria mudou e, se sim, cria um novo título de seção (`section-title`).
    * Cria um componente visual de "Card" usando HTML interno (`innerHTML`).
    * Injeta os blocos de código (`code`) e os resultados (`res`) processados diretamente nos cards.
* **Ano Dinâmico**: Seleciona o elemento de ID `current-year` no rodapé e insere o ano atual gerado por `new Date().getFullYear()`.

### 3. `math.js`
Este arquivo serve como um **Guia de Consulta e Testes no Terminal** (Node.js ou Console do Navegador). Diferente do `script.js`, ele não manipula o HTML, mas foca em exibir exemplos extensos através de `console.log`. Ele abrange detalhadamente:
* **Operadores Aritméticos Básicos**: Adição, subtração, multiplicação, divisão, resto (`%`) e exponenciação (`**`).
* **Incremento e Decremento**: Uso de `++` e `--`.
* **Atribuição Composta**: Uso de operadores como `+=` e `*=`.
* **Objeto Math**: Uso de `Math.PI`, arredondamentos (`Math.round`, `Math.floor`, `Math.ceil`, `Math.trunc`), raízes (`Math.sqrt`, `Math.cbrt`), potência (`Math.pow`), valor absoluto (`Math.abs`), e métodos para encontrar mínimos e máximos (`Math.min`, `Math.max`).
* **Aleatoriedade**: Geração de números randômicos com `Math.random()`.
* **Trigonometria**: Como calcular Seno (`Math.sin`) e Cosseno (`Math.cos`), lembrando que o JavaScript usa radianos e não graus.
* **Verificações Especiais**: Uso de `Number.isFinite()` e `Number.isNaN()`.
* **Operadores de Comparação**: Demonstra a diferença entre igualdade branda (`==`) e igualdade estrita (`===`).

### 4. `style.css`
Arquivo responsável por toda a **estilização e design responsivo** da página. Suas características incluem:
* **Variáveis CSS (`:root`)**: Define um esquema de cores padrão, focado em um tema escuro (Dark Mode) com tons de azul (accent color), para fácil manutenção.
* **Design Moderno**: Utiliza fontes sem serifa (`Inter`), `backdrop-filter` para efeitos de vidro (glassmorphism) nos cards, além de bordas suaves e transições em eventos de hover (passar o mouse por cima).
* **Grid Layout**: A classe `.container` usa `CSS Grid` com `repeat(auto-fill, ...)` para criar um layout fluido que automaticamente organiza o número de colunas baseado na largura disponível da tela.
* **Media Queries**: Regras de responsividade (`@media`) aplicadas para ajustar o layout, tamanhos de fonte e margens em telas menores (Tablets e Celulares).

## 🚀 Como Executar

**Para ver a Interface Gráfica:**
Basta abrir o arquivo `index.html` em qualquer navegador web moderno. 

**Para usar o manual de console (`math.js`):**
Você pode executar este arquivo utilizando o Node.js no seu terminal:
```bash
node math.js
```
Ou, alternativamente, copiar o conteúdo de `math.js` e colar na aba "Console" do Inspecionar Elemento (DevTools) do seu navegador web.

## 🛠️ Tecnologias Utilizadas
* HTML5
* CSS3 (Grid, Variáveis, Media Queries)
* JavaScript Vanilla (ES6+)
