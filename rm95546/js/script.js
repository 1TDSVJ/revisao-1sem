//comentario de uma linha 

/*  
Comentario de bloco
*/


//Ddocument. que escreve direto no html
//document.write("alo mundo");



// console de saida 
console.log("Alo Mundo!!")

// var global 
// let = uma variavel que pode ser usada para algo especifico dentro de uma funçao.
// const = um valor que não se modifica.

/*function alteraNome (nomeAlt){
    let nome 
    this.nome = nomeAlt
    return nome 
}

function verificacaoNome (nome){
    if(nome===undefined ){
        nome = "vazio"
    }
}
*/

const btn = document.getElementById("btnEnviar")

//atrelar o evendo 
//escutar o evento e realizar uma ação, ou seja esperar uma ação ocorrer dentro do programa.

btn.addEventListener("click", function() {
    btn.type = "button" // mudou o tipo do botao passando o valor de button
    //recuperar o input nmTask querySelector
    let inputTask = document.querySelectorAll("input[type=text]") // aqui ele está fazendo 
    inputTask[0].value = btn.innerHTML
})








