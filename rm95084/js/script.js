//Comentário de uma linha
/*
comentáriode bloco
*/

//Console de saída
console.log("Alô mundo!");

//Document que escreve direto na página
// document.write("Alô mundo!")

// const alternaNome = (nomeAlt) => {
//     let nome
//     nome = nomeAlt
//     return nome
// }

// const verificaNome = (nome) => {
//     if(nome === undefined){
//         nome = "vazio"
//     }
// }

//Func do exec
const cliqueBtn = () => {
  btn.type = "button";
  //Recuperar o input do campo nmTask
  let inputTask = document.querySelectorAll("input[type=text]");
  inputTask[0].value = btn.innerHTML;
  console.log(btn.innerHTML);
};

//Função que utiliza do botão
const btn = document.getElementById("btnEnviar");

//Add event listener
btn.addEventListener("click", cliqueBtn);
