// Comentário de 1 linha
/**
 * Comentário de bloco
 */

// Console ed saída
console.log("Hello World!")

// Document que escreve direto na página
// document.write("Hello World!")

// Variável global ex:
// var nome
// function alteraNome(nomeAlt){
//     this.nome - nomeAlt;
//     return nome
// }

// function verificacaoNome(nome){
//     if(nome === undefined){
//         nome = "vazio"
//     }
// }

const btn = document.getElementById('btnEnviar')

// Atrelando um evento
// Escutar um evento e realizar uma ação

btn.addEventListener("click", function(){
    btn.type = "button"
    // Recuperar o input nmTask querySelector
    //              document.querySelector("#nmTaskId")
    let inputTask = document.querySelectorAll("input[type=text]") 
    inputTask[0].value = btn.innerHTML
})