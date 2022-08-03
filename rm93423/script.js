
const btn = document.getElementById('btnEnviar')
button.addEventListener('click', ()=>{
    btn.type = 'button'
    let inputTask = document.querySelector("imput[type=text]")
    inputTask[0].value = btn.innerHTML

})


