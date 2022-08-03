//Comentário de uma linha
/**
 * Comentario de bloco
 */

//Console de saida
//console.log("Alô mundo!")

//Document que escreve direto na pagina
//document.write("Alô mundo!")

//escopo global
//var nome

/**function alteraNome(nomeAlt){
    this.nome = nomeAlt
    return nome
}

function verificacaoNome(nome){
    if(nome === undefined){
        nome = "vazio"
    }
}*/

//1ºPASSO
const btn = document.getElementById("btnEnviar") //btnEnviar = nome do evento do HTML

//Atrelar um evento do HTML
//Escutar um evento e realizar uma ação
btn.addEventListener("click", function(){
    btn.type = "button" //antes ele estav sumit agora eu mudei o tipo dele
    //Recuperar o input nmTask(HTML)
    let inputTask = document.querySelector("input[type = text]") //função que se aproxima do CSS 
    inputTask[0].value = btn.innerHTML //botão não tem value mas sim inner. Quem tem value é o sumit
})

