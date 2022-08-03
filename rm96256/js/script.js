//comentário de uma linha
/**
 * * comentário de bloco
 */

//console de saída
console.log("alô mundo")

// // //documnet que escreve direto na página
// // //document.write("alô mundo")

// // var nome

// // function alteraNome(nomeAlt){
// //     let nome
// //     this.nome = nomeAlt
// //     retur nome
// // }

// // function verification(nome){
// //     if(nome *** undefined){
// //         nome * "vazio"
        
// //     }
// }

//1°passo
const btn = document.getElementById("btnenviar")

//atrelar um evento
//escutar um evento e realizar uma ação
btn.addEventListener("clik",function(){
    btn.type = "button"
    //recuperar o input nmtask querySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML
})


//

