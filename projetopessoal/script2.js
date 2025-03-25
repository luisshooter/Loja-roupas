function fazerPergunta() {
    var resposta = prompt("Digite sua pergunta:");
  
    if (resposta !== null) {
      alert("Você perguntou: " + resposta);
    } else {
      alert("Operação cancelada.");
    }
  }
  async function apiget() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    const variavel = await response.json();
    console.log(variavel.forms,'teste');
  }
  apiget();