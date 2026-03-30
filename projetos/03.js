// i o, entrada e saída de dados
// para exibir uma mensagem na tela, podemos utilizar a função alert(), que é uma função nativa do javascript, e recebe como parâmetro a mensagem que queremos exibir
//alert("Olá, mundo!"); // isso vai exibir uma caixa de alerta com a mensagem "Olá, mundo!"
// para exibir uma mensagem no console do navegador, podemos utilizar a função console.log(), que é uma função nativa do javascript, e recebe como parâmetro a mensagem que queremos exibir
//console.log("Olá, mundo!"); // isso vai exibir a mensagem "Olá, mundo!" no console do navegador
// para solicitar uma entrada de dados do usuário, podemos utilizar a função prompt(), que é uma função nativa do javascript, e recebe como parâmetro a mensagem que queremos exibir para o usuário, e retorna o valor digitado pelo usuário
//let nome = prompt("Digite seu nome:");
//console.log("Olá, " + nome + "!"); // isso vai exibir a mensagem "Olá, [nome]!" no console do navegador

const prompt = require("readline-sync"); // isso é para importar a biblioteca readline-sync, que é uma biblioteca que permite ler a entrada de dados do usuário no terminal

const idade = prompt.question("Digite sua idade: ");
console.log(idade); // isso vai exibir a idade digitada pelo usuário no console do terminal

/////////////////////////////////////////////////////////////////////////////////////////////////
"// variáveis mutáveis e imutáveis Coerção de tipos e precedência das operações matemáticas"
//como qualquer resposta do usuario é uma string, mesmo que ele digite um número, o valor retornado pela função prompt() vai ser uma string, então para converter essa string em um número, podemos utilizar a função parseInt(), que é uma função nativa do javascript, e recebe como parâmetro a string que queremos converter para um número inteiro
const idade2 = prompt.question("Digite sua idade: ");
const idadeConvertida = parseInt(idade2);
console.log(idadeConvertida); // isso vai exibir a idade digitada pelo usuário convertida para um número inteiro no console do terminal
// para converter uma string em um número decimal, podemos utilizar a função parseFloat(), que é uma função nativa do javascript, e recebe como parâmetro a string que queremos converter para um número decimal
const altura = prompt.question("Digite sua altura: ");
const alturaConvertida = parseFloat(altura);
console.log(alturaConvertida); // isso vai exibir a altura digitada pelo usuário convertida para um número decimal no console do terminal

// outra forma de escrever o codigo bem menos complicados seria. 
/* manualmente cestamos convertend a string para um número 
utilizando a função Number(), que é uma função nativa do javascript, 
e recebe como parâmetro a string que queremos converter 
para um número, e retorna o número convertido*/
const idade3 = prompt.question("Digite sua idade: ");
const idadeNumber = Number(idade3);
console.log(idadeNumber); // isso vai exibir a idade digitada pelo usuário convertida para um número inteiro no console do terminal