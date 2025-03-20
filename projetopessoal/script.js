function criarUsuario() {
    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   // var telephone = document.getElementById("telephone").value;

    // Validar os valores (adicionar validações conforme necessário)
  
    // Exibir mensagem (pode ser substituída por lógica de envio para um servidor)
    alert("Usuário criado!\n\nNome de usuário: " + username + "\nE-mail: " + email);
  }  