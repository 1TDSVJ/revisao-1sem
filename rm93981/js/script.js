//Cmentário de uma linha
/**
 * Comenário de bloco
 */
//Console de saída
console.log("Alô mundo!")

//Documento que escreve direto na página
//document.write("Alô, mundo!")

//variaveis var são globais
//variaveis let são locais
// variaveis const não são alteradas ao decorrer da utilização do código

// var nome


// function alteraNome(nomeAlt){
//     this.nome = nomeAlt
//     return nome
// }

// function verificacaoNome(nome){
//     if(nome === undefined) {
//         nome = "vazio"
//     }

// }

//1°passo
const btn = document.getElementById("btnEnviar")

//Atrelar um evento
// escutar um vento e realizar uma ação
btn.addEventListener("click", ()=>{
    btn.type = "button"
    //Recuperar o input nmTask com querySelector
    let inputTask = document.querySelector("input{type=text}")
    inputTask[0].value = btn.innerHTML
})
