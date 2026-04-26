const prompt = require("prompt-sync")();

//for
/*é uma estrutura de controle de fluxo que permite executar 
um bloco de código repetidamente, com base em uma condição. 
Ele é composto por três partes: a inicialização, 
a condição e a atualização.*/

//estrutura basica do loop for:

//let i;

//expressão 1 : inicialização da variável de controle
//expressão 2 : condição de continuação do loop, define quando o loop deve parar de ser executado
//expressão 3 : atualização da variável de controle

//for (expressão1; expressão2; expressão3) {
//bloco de código a ser executado em cada iteração
//}

//Exemplo de uso do loop for para imprimir os números de 0 a 4
/*for (i = 0; i < 5; i++) {
  console.log(i);
}

//Omissão de parametros no loop for
/*É possível omitir qualquer uma das expressões no loop for, 
mas é importante garantir que a lógica do loop seja mantida 
para evitar loops infinitos ou comportamentos inesperados*/
//Exemplo de loop for sem a expressão de inicialização

/*let j = 0; // Variável de controle inicializada fora do loop
for (; j < 5; j++) {
  console.log(j);
}*/

//limpando o console
console.clear();

//Exemplo de loop for sem a expressão de atualização
/*let maiorNumero = 0;
let numeroInformado;

for (let k = 1; k <= 5; k++) {
  numeroInformado = parseInt(prompt("Informe um número positivo: "));
  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;

    if (numeroInformado < maiorNumero) {
      maiorNumero = numeroInformado;
    }
  }
}
console.log("O maior número informado foi:", maiorNumero);
*/

//percondo strings com loop for
const nome = "Ernesto";
for (let l = 0; l < nome.length; l++) {
  console.log(nome[l]);

  if (l === 2) {
    break; // Interrompe o loop quando l é igual a 2
  }
}
