async function buscar() {
    console.log("passei por aqui")

    const resposta = await fetch("https://660f44ad356b87a55c510d17.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json()

    console.log("resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        return "TESTE "
    });
}

console.log("antes de buscar")
buscar();
console.log("depois de buscar")