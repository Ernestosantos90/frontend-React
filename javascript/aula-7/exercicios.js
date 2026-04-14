//Sabendo que o valor das variáveis a e b são 3 e -4, respectivamente,
// assinale a alternativa cujo valor da expressão booleana resulta em true.

//a > 2 && b > 0;

//a < 3 && b === -4;

//a > 3 || b > 0;

//a > 0 || b < 0;
//Resposta: a > 0 || b < 0 é a alternativa correta,
// pois a é maior que 0 e b é menor que 0, o que torna a expressão verdadeira.
/*em um exercicio exemplo de operador lógico, a expressão booleana a > 0 || b < 0 é avaliada como verdadeira, pois a é maior que 0 e b é menor que 0. O operador lógico || (OU) retorna true se pelo menos uma das condições for verdadeira. 
Portanto, mesmo que a > 0 seja verdadeiro, a expressão completa é verdadeira devido à condição b < 0 ser verdadeira também.*/
//eles ficariam desse jeito:

//console.log(a > 2 && b > 0); // false
//console.log(a < 3 && b === -4); // true
//console.log(a > 3 || b > 0); // false
//console.log(a > 0 || b < 0); // true

//////////////////////////////////////////////////
//qual mensagem será mostrada quando o código abaixo for executado?

if (50 > 100) {
  console.log("Falta um tanto");
} else {
  if ("1" == "-1") {
    console.log("Quase lá");
  }

  if (!null) {
    console.log("Sucesso");
  }
}

/*No JavaScript mesmo que algum valor não seja um valor booleano true ou false, ele será traduzido para algum desses valores em um contexto de uma operação booleana. Os valores que são traduzidos para true são conhecidos como truthy, enquanto os valores traduzidos para false são conhecidos como falsy. Sabendo disso, assinale a alternativa que contém um valor truthy.*/


0


null


' '


NaN
//Resposta: ' ' (uma string vazia) é um valor truthy, 
// pois em JavaScript, uma string vazia é considerada 
// verdadeira em um contexto booleano. Os outros valores 
// (0, null e NaN) são considerados falsy, ou seja, são 
// convertidos para false em um contexto booleano. 
// Portanto, a alternativa correta é ' '.