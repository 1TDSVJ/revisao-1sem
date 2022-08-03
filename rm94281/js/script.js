const sendBtn = document.getElementById('btnEnviar');
sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendBtn.type = 'button';
  // recuperar o input nmTask com querySelector
  let textFields = document.querySelectorAll('input[type=text]');
  textFields[0].value = sendBtn.innerText;
});
