const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio padrão do formulário
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const endereco = document.getElementById('endereco').value;

  // verifica se todos os campos estão preenchidos
  if (nome === '' || cpf === '' || email === '' || endereco === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // exibe mensagem de envio com sucesso
  alert('Envio com sucesso!');
  // aqui você pode adicionar o código para enviar os dados do formulário para o servidor
});
