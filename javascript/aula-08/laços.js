//while
/*
a palavra while em ingles significa "enquanto", ou seja, 
enquanto a condição for verdadeira, 
o código dentro do bloco será executado. 
No exemplo abaixo, o código dentro do 
bloco while será executado enquanto a 
variável i for menor que 5. 
*/

/*const pompt = require("readline-sync");

const saldo = pompt.question("Qual eh o seu saldo? ");
if (saldo < 0) {
  console.log("Saldo invalido! por favor informe novamente");
}
console.log(saldo);
*/

/*const pompt = require("readline-sync");
let saldo = number(pompt.question("Qual eh o seu saldo? "));
let saldo2 = 0;
while (saldo < 0) {
  saldo2 = number(
    pompt.question("Saldo invalido! por favor informe novamente: "),
  );
}
console.log(saldo2);
//corrigir loo infinito no while, o saldo2 deve ser atribuido a saldo para que a condição seja verificada novamente.
//ex..
/*
const pompt = require("readline-sync");
let saldo = number(pompt.question("Qual eh o seu saldo? "));    
while (saldo < 0) {
  saldo = number(
    pompt.question("Saldo invalido! por favor informe novamente: "),
  );
}   
console.log(saldo);
*/

// imagine que queremos somar as notas de um aluno, e para isso precisamos ler as notas do aluno, e para isso podemos usar o while para ler as notas do aluno até que o aluno informe que não tem mais notas para informar.

// const prompt = require("readline-sync");

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));
// let somaDasNotas = 0; // acumulador para somar as notas do aluno
// let qtdNotasValidas = 0; // contador para contar a quantidade de notas válidas informadas pelo aluno
// while (notaDoAluno >= 0) {
//   somaDasNotas = somaDasNotas + notaDoAluno; // incrementando o acumulador com a nota do aluno
//   qtdNotasValidas = qtdNotasValidas + 1; // incrementando o contador de notas válidas
//   //aqui dentro podemos fazer o pos e o pre incremento
//   notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));
// }
// console.log(somaDasNotas);
// console.log(qtdNotasValidas);

//sorteio de um numero aleatorio entre 0 e 10
const numeroSorteado = parseInt(Math.random() * 10); // gerando um numero aleatorio entre 0 e 10//0.46789*10 = 4.6789
const prompt = require("readline-sync");
let numeroDoUsuario = Number(
  prompt.question("Informe um numero entre 0 e 10: "),
);
console.log(numeroSorteado);
while (numeroDoUsuario !== numeroSorteado) {
  console.log("Numero errado! tente novamente");
  numeroDoUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));
}
console.log("Parabens! Voce acertou!");
