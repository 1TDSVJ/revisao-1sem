//comentario de uma linha
/**
 * comentario de bloco
 */

//comentario de saida
// console.log("Alô mundo!")

// var nome

// function alteraNome(nomeAlt){    
//     this.nome = nomeAlt
//     return nome
// }

// function verificacaoNome(nome){
//   if(nome === undefined){
//     nome = "vazio"
//   }

// }

// primeiro passo
const btn = document.getElementById("btnENviar")

//atrelar um evento
//Escutar um evento e realizar uma ação

btn.addEventListener("click",()=>{
    btn.type = "button"
    //Recuperar o input nmTask querrySelector
    let inputTask = document.querySelector("input[tyoe=text]")
    inputTask[0].value = btn.innerHTML 
})