//operador ternario
//condição ? true : false
/*servem para simplificar estruturas de controle de fluxo simples, 
onde uma condição é verificada e um valor é retornado 
com base no resultado dessa condição. */
const idade = 21;
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); // Output: "Pode dirigir"
//Exemplo 2
const numero = 10;
const resultado = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado); // Output: "Par"
//Exemplo 3
const temperatura = 30;
const clima = temperatura > 25 ? "Quente" : "Frio";
console.log(clima); // Output: "Quente"
////////////////////////////////////////////////////////////////
//pode ser feito daq seguinte maneira também

//idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // Output: "Maior de idade"

/*resumindo, o operador ternário é uma forma concisa de escrever expressões 
condicionais, permitindo que você retorne um valor com base em uma condição 
de maneira mais compacta do que usando estruturas tradicionais como if-else.*/
