// comentario de uma linha
/**
 * comentario de bloco
 */

//console de saida
console.log("Alô mundo!")

//Document que esceve direto na página
//document.write("Alô mundo!")

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

//1o passo
const btn = document.getElementById("btnEnviar")

//atrelar um evento
//escutar um evento e realizar uma ação
// btn.addEventListener("click", function(){
//     btn.type = "button"
//     //recuperar o input nmTask querySelector
//     let inputTask = document.querySelectorAll("input[type=text]")
//     inputTask[0].value = btn.innerHTML

// })

btn.addEventListener("click", ()=>{
    btn.type = "button"
    //recuperar o input nmTask querySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML

})

//tente melhorar a função - passe os dados do form e imprima