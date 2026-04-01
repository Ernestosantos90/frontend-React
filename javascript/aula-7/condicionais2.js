//switch case
// serve para comparar uma variável com diversos valores, e executar um bloco de código diferente para cada valor
/*o switch significa "selecionar" e é usado 
para criar uma estrutura de controle de fluxo 
que permite executar diferentes blocos de código 
com base no valor de uma variável*/
//em portugued switch case é conhecido como "caso de seleção" ou "caso de escolha"

const permissoes = "estranho"; // pode ser 'aluno', 'editor','contributor'ou "professor"
switch (permissoes) {
  case "admin":
    console.log(
      "Você é um administrador e esta habilitado para acessar todas as funcionalidades.",
    );
    break;
  case "aluno":
    console.log("Você so pode assistir as aulas.");
    break;
  case "editor":
    console.log("Você pode modificar o conteúdo.");
    break;
  case "contributor":
    console.log("Você vode pode deixar comentários.");
    break;
  default:
    console.log("Permissão não reconhecida.");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//imagine que estamos criando login para um site, e queremos verificar se o usuário tem permissão para acessar o conteúdo.
//podemos usar o switch case para verificar o tipo de usuário e exibir uma mensagem diferente para cada tipo de usuário.
const prompt = require("readline-sync");

const tipoDeUsuario = prompt.question(
  "Qual eh o seu tipo de usuario? (admin, editor, contributor, professor) ",
);
switch (tipoDeUsuario) {
  case "admin":
    console.log("Bem-vindo, administrador! Você tem acesso total.");
    break;
  case "editor":
    console.log("Bem-vindo, editor! Você pode modificar o conteúdo.");
    break;
  case "contributor":
    console.log("Bem-vindo, colaborador! Você pode deixar comentários.");
    break;
  case "professor":
    console.log("Bem-vindo, professor! Você pode criar aulas.");
    break;
  default:
    console.log("Bem-vindo, visitante! Você tem acesso limitado.");
}

/*o break e o default são opcionais, mas é recomendado usar o break 
para evitar que o código continue executando os próximos casos mesmo 
depois de encontrar um caso correspondente. O default é usado para 
lidar com casos em que nenhum dos casos anteriores corresponde ao 
valor da variável, no final do codigo é sempre bom colocar o default
e o break para parar a execução  do switch*/
