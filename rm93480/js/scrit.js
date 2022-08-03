// <- Comentário de 1 linha

/**
Comentário de bloco
*/

// Console de saída
console.log("Olá Pessoas")

// Document que escreve direto na página
document.write("Olá Pessoas")

/**

var -> declara uma variável global

let -> declara uma variável apenas dentro da função/ambiente específico

const -> declara uma constante

*/

//1° Passo
const btn = document.getElementById("btnEnviar")

//Atrelando um evento
//Escutar(Deixar um evento em aguardo) um evento e realizar uma ação
/**
    btn.addEventListener("click",function(){
        //Mudou o tipo do botão
        btn.type = "button"
        //Recuperou o input nmTask querySelecor
        let inputTask = document.querySelectorAll("input[type=text]")
        //  ^ Criou um array com todos os inputs de tipo text
        inputTask[0].value = btn.innerHTML
        //           ^ Manda o valor| ^ para o campo
    })
*/
btn.addEventListener("click",()=>{
    btn.type = "button"
    let inputTask = document.querySelectorAll("input[type=text]")
    inputTask[0].value = btn.innerHTML
})