//Comentario de uma linha
/**
 * Comentario de bloco
 */
//Console de saida
// console.log("Alo mundo!")

// //Document que escreve direto na pagina
// //document.write("Alo mundo!")

// var nome
// function alteraNome(nomeAlt){
//     this.nome = nomeAlt
//     return nome
// }

// function verificacaoNome(nome){
//     if(nome === undefined){
//         nome = "vazio"
//     }
// }

//1oPasso
const btn = document.getElementById("btnEnviar")

//Atrelar um evento
//Escutar um evento e realizar uma ação
btn.addEventListener("click",function(){
    btn.type = "button"
    //Recuperar o input nmTask com quarySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML

})

