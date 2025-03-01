function fazerPergunta() {
    var resposta = prompt("Digite sua pergunta:");
  
    if (resposta !== null) {
      alert("Você perguntou: " + resposta);
    } else {
      alert("Operação cancelada.");
    }
  }
  