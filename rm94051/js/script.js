// Comentário de um linha 
/*
* Comentário de bloco
*/

// Document que escreve direto na página
//document.writeln("Olá Mundo!")

// Console de Saída
console.log("Olá Mundo!")


// // Var Variável de Escopo Global
// var nome

// // Let Variável de Escopo Local
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

// // Const Variável de Escopo Global NÃO ALTERAVEL

// 1° Passo
const btn = document.getElementById("btnEnviar")

//Atrelar um evento
// Escutar um evento e realizar uma ação
btn.addEventListener("click", function(){
    btn.type = "button"
    //Recuperar o input nmTask querySelector
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML

})


