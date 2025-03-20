// Comando para executar o código:
// 1° Passo: Compilar o arquivo TypeScript para JavaScript
//    tsc exercicio.ts --lib es2015,es2016,dom
// 2° Passo: Executar o código gerado
//    node exercicio.js 

console.log('Vamos fazer algumas operações sobre arrays usando funções nativas');

// Definindo um vetor de números
const numeros: number[] = [1, 2, 3, 4, 5];

console.log(`O array base é: [${numeros.join(', ')}]`);

// Usando o método reduce para calcular a soma
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(`A soma dos elementos do vetor é: ${soma}`);

// Usando o método map para multiplicar cada número por 2
const numerosMultiplicados = numeros.map(numero => numero * 2);
console.log(`Cada número multiplicado por 2: [${numerosMultiplicados.join(', ')}]`);

// Usando o método filter para pegar os números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(`Números pares no array: [${numerosPares.join(', ')}]`);

// Usando o método findIndex para encontrar o índice do número 2
let indice = numeros.findIndex(numero => numero === 2);
console.log(`Índice do número 2: ${indice}`);
indice = numeros.findIndex(numero => numero === 10);
console.log(`Índice do número 10 (se não existir, retorna -1): ${indice}`);

// Criando uma cópia do array antes de usar fill
const numerosModificados = [...numeros];
numerosModificados.fill(9, 0, 2);
console.log(`Substituindo os valores das posições 0 a 1 por 9: [${numerosModificados.join(', ')}]`);

// Verifica se todos os números são pares
const todosSaoPares = numeros.every(num => num % 2 === 0);
console.log(`Todos os números são pares? ${todosSaoPares ? 'Sim' : 'Não'}`);

// Verifica se pelo menos um número é par
const temNumeroPar = numeros.some(num => num % 2 === 0);
console.log(`Existe algum número par? ${temNumeroPar ? 'Sim' : 'Não'}`);

// Criando uma cópia parcial do array usando slice (pegando índices de 1 a 3)
const parteDoArray = numeros.slice(1, 4); 
console.log(`Parte do array (índices 1 a 3): [${parteDoArray.join(', ')}]`);

// Criando uma cópia para evitar modificar o array original e usando splice
const numerosAlterados = [...numeros];
numerosAlterados.splice(2, 1, 99); // Remove 1 elemento no índice 2 e adiciona 99
console.log(`Array após modificar com splice: [${numerosAlterados.join(', ')}]`);

// Criando cópias antes de usar reverse() e sort(), pois eles alteram o array original
const numerosInvertidos = [...numeros].reverse();
console.log(`Array invertido: [${numerosInvertidos.join(', ')}]`);

const numerosCrescente = [...numeros].sort((a, b) => a - b);
console.log(`Array ordenado em ordem crescente: [${numerosCrescente.join(', ')}]`);

const numerosDecrescente = [...numeros].sort((a, b) => b - a);
console.log(`Array ordenado em ordem decrescente: [${numerosDecrescente.join(', ')}]`);

// Verificando se o número 3 está presente no array
const temNumero3 = numeros.includes(3);
console.log(`O array contém o número 3? ${temNumero3 ? 'Sim' : 'Não'}`);

// Iterando sobre os elementos do array usando forEach
console.log('Iterando sobre os elementos do array:');
numeros.forEach((num, index) => {
  console.log(`Índice ${index}: ${num}`);
});

// Criando um array dinâmico usando Array.from()
const arrayDinamico = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(`Array gerado dinamicamente: [${arrayDinamico.join(', ')}]`);
