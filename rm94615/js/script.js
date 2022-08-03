/*
    Comentario de bloco
*/
//Comentario de linha

//Console de saída
console.log("Alô mundo!")

//Document que escreve direto na página 
//document.write("Alô mundo!")

// //Váriavel de escopo global (var)

// var nome

// //Váriavel de escopo local (let)

// function alteraNome(nomeAlt){
//     let nome
//     this.nome = nomeAlt
//     return nome
// }

// function verificacaoNome(nome){
//     if(nome === undefined){
//         nome = "vazio"
//     }
// }

// Váriavel de escopo global NÃO ALTERAVEL (cont)
const btn = document.getElementById("btnEnviar")

// Atrelar um evento
// Escutar um evento e realizar uma ação
btn.addEventListener("click", ()=>{
    btn.type = "button"
    // Recuperar o input nmTask com quarySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML

})




