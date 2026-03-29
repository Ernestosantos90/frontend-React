//Camel case regra de someças a sintax com a primeira letra minuscula e as outras palavras com maiuscula

//o javascript possui tipagem dinamica: infere os tipos de dados
//o javascript também é uma liguagem de tipagem fraca
/*var nome = "Ernesto Santos"; // Str utilizar sempre aspas para definir uma string
var idade = 35; // number
var altura = 1.99; //number também
var estudando = true; // boolean(verdadeiro ou falso)*/

var curso = "frontend",
  topico = "javascript basico";
console.log(curso, topico);
// atualmente não se usa mais a palavra var para declarar variáveis, mas sim let ou const
//let é uma variável mutável, ou seja, pode ser reatribuida
//const é uma variável imutável, ou seja, não pode ser reatribuida
let nome = "Ernesto Santos";
console.log(nome);
nome = "Ernesto Santos Junior";
console.log(nome);
const nomeCompleto = "Ernesto Santos";
console.log(nomeCompleto);
// nomeCompleto = "Ernesto Santos Junior"; // isso vai gerar um erro, pois nomeCompleto é uma constante e não pode ser reatribuida
// em um calculo de imc, por exemplo, o peso e a altura podem ser variáveis mutáveis, pois podem ser reatribuídas, enquanto o valor do imc pode ser uma constante, pois não deve ser reatribuída
let peso = 80;
let altura = 1.99;
const imc = peso / (altura * altura);
console.log(imc);
// porem num calculo de notas de um aluno, as notas podem ser constantes, pois não devem ser reatribuídas, enquanto a média pode ser uma variável mutável, pois pode ser reatribuída caso o aluno faça uma prova de recuperação, por exemplo
const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media);
media = (nota1 + nota2 + nota3 + 10) / 4;
console.log(media);
// ter muito cuidado com a precedencia das operações, pois o javascript segue a ordem das operações matemáticas, ou seja, primeiro as multiplicações e divisões, depois as adições e subtrações
let resultado = 10 + 5 * 2;
console.log(resultado); // isso vai retornar 20, pois a multiplicação tem precedencia sobre a adição
resultado = (10 + 5) * 2;
console.log(resultado); // isso vai retornar 30, pois a adição tem precedencia sobre a multiplicação devido aos parênteses
// então ele segue a ordem primeiro os parênteses, depois as multiplicações e divisões, e por último as adições e subtrações

//Biblioteca Math do javascript
/* possui diversas funções matemáticas, como por exemplo a função Math.pow() 
para calcular potências, a função Math.sqrt() para calcular raízes quadradas, 
a função Math.round() para arredondar um número, entre outras*/

//imagina que queremos calcular a raiz quadrada dos números 16 e 25, podemos utilizar a função Math.sqrt() para isso
let numero1 = 16;
let numero2 = 25;
let raizQuadrada1 = Math.sqrt(numero1);
let raizQuadrada2 = Math.sqrt(numero2);
console.log(raizQuadrada1);
console.log(raizQuadrada2);
// agora imagina que queremos calcular a potência de 2 elevado a 3, podemos utilizar a função Math.pow() para isso
let base = 2;
let expoente = 3;
let potencia = Math.pow(base, expoente);
console.log(potencia);
// agora imagina que queremos arredondar o número 3.14 para o número inteiro mais próximo, podemos utilizar a função Math.round() para isso
let numero3 = 3.14;
let arredondado = Math.round(numero3);
console.log(arredondado);
// agora imagina que queremos arredondar o número 3.14 para baixo, ou seja, para o número inteiro mais próximo menor que ele, podemos utilizar a função Math.floor() para isso
let arredondadoParaBaixo = Math.floor(numero3);
console.log(arredondadoParaBaixo);
// agora imagina que queremos arredondar o número 3.14 para cima, ou seja, para o número inteiro mais próximo maior que ele, podemos utilizar a função Math.ceil() para isso
let arredondadoParaCima = Math.ceil(numero3);
console.log(arredondadoParaCima);
// para mais funções podemos consultar a pagina da documentação do javascript, que é a MDN (Mozilla Developer Network) e procurar pela biblioteca Math, onde tem todas as funções matemáticas disponíveis no javascript.

// Entrada de dados com prompt
