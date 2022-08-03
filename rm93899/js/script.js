//Comentário de uma linha
/**
 * Comentário de bloco
 */

//Console de saída
console.log("Alô mundo!")

//Document que escreve direto na página
//document.write("Alô mundo!")

//declarar variável de escopo global (var)
//declarar variável local (let)
//declarar variável de escopo global que não há alteração (const)

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

//1oPASSO

const btn = document.getElementById("btnEnviar")
//Atrelar um evento
//Escutar um evento e realizar uma ação
btn.addEventListener("click", ()=>{      //()=> é a mesma coisa que function ArrowFunction
    btn.type = "button"
    //Recuperar o input nmTaks querySelector
    let inputTask = document.querySelectorAll("input[type=text]") //querySelector
    inputTask[0].value = btn.innerHTML
})
