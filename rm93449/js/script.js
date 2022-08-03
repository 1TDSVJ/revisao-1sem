//Comentário de uma linha

/**
 * Comentário de bloco
 */

//Document que escreve direto na página
//document.write("Alô mundo!")

//Console de saída
console.log("Alô mundo!")

/* 
Let = Variável encapsulada
var = Variável global
const = Variável constante

function alteraNome(nomeAlt){
    let nome
    this.nome = nomeAlt 
    return nome
}

var nome 

function verificacaoNome(nome){
    if(nome === undefined){
        nome = "vazio"
    }
}
*/

const btn = document.getElementById("btnEnviar")

//Atrelar um evento
btn.addEventListener("click", function(){
    btn.type = "button"
    //Recuperar o input nmTask com querySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML
})