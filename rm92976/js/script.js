//Comentáro de uma linha
/** comentário de duas linhas */

//document que escreve direto na página
//document.write("Alô mundo")

//Console de saída
console.log("Eae rapaziada")

//var nome

//function alteraNome(nomeAlt){
   // let nome
    //this.nome = nomeAlt
    //return nome
//}

//function verificacaoNome(nome){
    //if(nome === undefined){
        //nome = "vazio"
   // }
//}

//Passo 1
const btn = document.getElementById('btnEnviar');

//Atrelar um evento, escutar um evento e realizar uma ação.
btn.addEventListener("click", function() {
    btn.type = "button"
    //Recuperar o input da nmTask queryselector
    let inputTask = document.querySelector("input[type=text]")
    inputTask[0].value = btn.innerHTML
})
