// Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

//console de saída
console.log("Olá Mundo!")

//documento que escreve na página
//document.write("Olá Mundo!")
var nome


//function alteraNome(nomeAlt) {
//    this.nome = nomeAlt
//    return nome
//}

//function verificacaoNome(nome) {
//    if(nome === undefined){
//        nome = "vazio"
//    }
//}

//1 passo
const btn = document.getElementById("btnEnviar")

//atrelar um evento
//escutar um evento e realizar uma ação

btn.addEventListener("click", () =>{
btn.type = "button"
//Recuperar o input nmTask querySelector
let inputTask = document.querySelectorAll("input[type=text]")
inputTask[0].value = btn.innerHTML
})