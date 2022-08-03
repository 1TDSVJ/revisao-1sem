//Comentário de uma linha
/**
 * Comentário de bloco
 */

//Document que escreve direto na página
// document.write("Alô Mundo!")  

//Console de saída
// console.log("Alô Mundo!")

// var nome
// function alteraNome(nomeAlt) { 
//     this.nome = nomeAlt
//     return nome
// }

// function verifificacaoNome(nome) {
//     if(nome === undefined) {
//         nome = "vazio"
//     }
// } 



//1° passo
const btn = document.getElementById('btnEnviar')

//Atrelar um evento
//Escutar um evento e realizar uma ação
btn.addEventListener("click", function() {
    btn.type = "button"
    //Recuperar o input nmTask
    let inputTask = document.querySelector("input[type=text]")
    inputTask[0].value = btn.innerHTML
}) 