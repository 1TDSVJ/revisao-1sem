// Comentário de uma linha
/**
 * Comentário de bloco
 */
// Console de saída
console.log('Hello, World!');

const sendBtn = document.getElementById('btnEnviar');
sendBtn = addEventListener('click', () => {
  sendBtn.type = 'button';
  // Recuperar o input nmTask
  let textInputs = document.querySelectorAll('input[type=text]');
  textInputs[0].value = sendBtn.innerHTML;
});


