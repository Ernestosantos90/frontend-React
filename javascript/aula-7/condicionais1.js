// Controle de fluxos e Condicionais
/*o controle de fluxos é a forma como o código é executado, 
ou seja, a ordem em que as instruções são executadas
as condicionais são estruturas de controle de fluxo que 
permitem executar um bloco de código apenas se 
uma determinada condição for verdadeira*/

/*a estrutura de controle de fluxo mais simples é o if, 
que executa um bloco de código apenas se uma 
determinada condição for verdadeira*/

const prompt = require("readline-sync");

const idade = parseInt(prompt.question("Qual eh a sua idade? "));

const maiorDeIdade = idade >= 18;
if (maiorDeIdade) {
  console.log("Você eh maior de idade.");
} else {
  console.log("Você não é maior de idade.");
}
//neste exemplo, o código dentro do bloco if só será executado se a variável maiorDeIdade for verdadeira, ou seja, se a idade for maior ou igual a 18. Caso contrário, o código dentro do bloco if será ignorado e o programa continuará sua execução normalmente.
/*o if também pode ser usado com a palavra-chave else, 
that permite executar um bloco de código caso a condição do if seja falsa*/

// imaginemos que queremos verificar a media de um aluno e exibir uma mensagem de aprovação ou reprovação
// const mediaDoAluno = 6.5; - aqui se usa quando a media do aluno é fixa, mas se quisermos que o usuário informe a media do aluno, podemos usar o prompt para ler a entrada do usuário e converter para um número usando parseFloat

const mediaDoAluno = parseFloat(prompt.question("Qual eh a media do aluno? "));
if (mediaDoAluno >= 7) {
  console.log("Aluno aprovado!");
  console.log("Parabéns! 🤞❤");
} else {
  console.log("Aluno reprovado!");
}

/* a logica da verificação é: quando a condição do if é verdadeira, 
o bloco de código dentro do if é executado, e não precisa verificar as outras condições; 
caso contrário, o bloco de código dentro do else é executado */

// Posso dirigir ou não?
const idadeParaDirigir = parseInt(prompt.question("Qual eh a sua idade? "));
const temCnh = true; /* aqui estamos assumindo que o usuário tem CNH, mas em um cenário real, 
 poderíamos perguntar ao usuário se ele tem CNH e armazenar a resposta em uma variável booleana*/
if (idadeParaDirigir >= 18 && temCnh) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir!");
}
/*neste exemplo, o código dentro do bloco if só será executado se 
a variável idadeParaDirigir for maior ou igual a 18 e a variável 
temCnh for verdadeira. Caso contrário, o código dentro do bloco 
if será ignorado e o programa continuará sua execução normalmente, 
exibindo a mensagem "Você não pode dirigir!"*/

