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
