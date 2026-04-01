// Boleoleanos, Controle de fluxos e Condicionais
// os booleanos são valores que podem ser verdadeiro ou falso, e são muito utilizados para controle de fluxos e condicionais
// o controle de fluxos é a forma como o código é executado, ou seja, a ordem em que as instruções são executadas
// as condicionais são estruturas de controle de fluxo que permitem executar um bloco de código apenas se uma determinada condição for verdadeira

// Operadores booleanos,
/*os operadores booleanos são utilizados para comparar 
valores e retornar um valor booleano, ou seja, verdadeiro ou falso
os operadores de comparação são: ==, ===, !=, !==, >, <, >=, <=
o operador == compara apenas o valor, ou seja, ele considera 
que 5 e "5" são iguais, pois ambos possuem o mesmo valor*/
const numero1 = 10;
const numero2 = 11;

console.log(numero1 == numero2); // isso vai retornar false, pois os valores são diferentes
console.log(numero1 === numero2); // isso vai retornar false, pois os valores são diferentes e os tipos também são diferentes
console.log(numero1 == "10"); // isso vai retornar true, pois os valores são iguais, mesmo que os tipos sejam diferentes
console.log(numero1 === "10"); // isso vai retornar false, pois os valores são iguais, mas os tipos são diferentes
/* então a diferença entre o operador == e === é que 
o primeiro compara apenas o valor, enquanto o segundo 
compara o valor e o tipo. então o melhor é sempre 
usar os operadores === e !==  eles comparam o conteudo e o tipo*/

/*o operador != compara apenas o valor, ou seja, ele considera que 5 e "5" são diferentes, pois ambos possuem o mesmo valor*/
console.log(numero1 != numero2); // isso vai retornar true, pois os valores são diferentes
console.log(numero1 !== numero2); // isso vai retornar true, pois os valores são diferentes e os tipos também são diferentes

//existem outros operadores booleanos, como o operador lógico AND (&&), OR (||) e NOT (!)
// o operador lógico AND (&&) retorna true se ambos os operandos forem verdadeiros, caso contrário, retorna false
console.log(true && true); // isso vai retornar true, pois ambos os operandos são verdadeiros
console.log(true && false); // isso vai retornar false, pois um dos operandos é falso
console.log(false && false); // isso vai retornar false, pois ambos os operandos são falsos
// o operador lógico OR (||) retorna true se pelo menos um dos operandos for verdadeiro, caso contrário, retorna false
console.log(true || true); // isso vai retornar true, pois ambos os operandos são verdadeiros
console.log(true || false); // isso vai retornar true, pois um dos operandos é verdadeiro
console.log(false || false); // isso vai retornar false, pois ambos os operandos são falsos
//EXEMPLO COM IDADES

const idade1 = 16;
const idade2 = 39;
console.log(idade1 >= 18 && idade2 >= 18); // isso vai retornar false, pois idade1 é menor que 18
console.log(idade1 >= 18 || idade2 >= 18); // isso vai retornar true, pois idade2 é maior ou igual a 18
/*para o && só retorna true se ambos sejam verdadeiros, para o || retorna true se pelo menos um for verdadeiro*/

// o operador lógico NOT (!) retorna true se o operando for falso, caso contrário, retorna false
console.log(!true); // isso vai retornar false, pois o operando é verdadeiro
console.log(!false); // isso vai retornar true, pois o operando é falso

//exemplo com >, <, >=, <=
console.log(numero1 > numero2); // isso vai retornar false, pois 10 não é maior que 11
console.log(numero1 < numero2); // isso vai retornar true, pois 10 é menor que 11
console.log(numero1 >= numero2); // isso vai retornar false, pois 10 não é maior ou igual a 11
console.log(numero1 <= numero2); // isso vai retornar true, pois 10 é menor ou igual a 11

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Controle de fluxos e Condicionais
/*o controle de fluxos é a forma como o código é executado, 
ou seja, a ordem em que as instruções são executadas
as condicionais são estruturas de controle de fluxo que 
permitem executar um bloco de código apenas se 
uma determinada condição for verdadeira*/

/*a estrutura de controle de fluxo mais simples é o if, 
que executa um bloco de código apenas se uma 
determinada condição for verdadeira*/

const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade"); // isso vai ser executado, pois a condição é verdadeira
}
/*o if pode ser acompanhado de um else, que executa um bloco de código caso a condição do if seja falsa*/

if (idade >= 18) {
  console.log("Você é maior de idade"); // isso vai ser executado, pois a condição é verdadeira
} else {
  console.log("Você é menor de idade"); // isso não vai ser executado, pois a condição do if é verdadeira
}
/*o if também pode ser acompanhado de um else if, que permite verificar múltiplas condições*/

const nota = 7;
if (nota >= 7) {
  console.log("Você passou de ano"); // isso vai ser executado, pois a condição é verdadeira
} else if (nota >= 5) {
  console.log("Você está de recuperação"); // isso não vai ser executado, pois a condição do if é verdadeira
} else {
  console.log("Você reprovou"); // isso não vai ser executado, pois a condição do if é verdadeira
}
/*o if também pode ser aninhado, ou seja, um if dentro de outro if*/

const hora = 10;
if (hora < 12) {
  console.log("Bom dia"); // isso vai ser executado, pois a condição é verdadeira
} else if (hora < 18) {
  console.log("Boa tarde"); // isso não vai ser executado, pois a condição do if é verdadeira
} else {
  console.log("Boa noite"); // isso não vai ser executado, pois a condição do if é verdadeira
}
