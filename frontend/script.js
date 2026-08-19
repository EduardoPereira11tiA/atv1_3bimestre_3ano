async function buscarFilmes() {
    // ir ao backend, acessar a rota GET e mostrar os filmes na tela.
    const resposta = await fetch("http://localhost:3000/all-movies")
    const filmes = await resposta.json()
    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `
            <div>
                <h2>${filme.titulo}</h2>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p><strong>Duração:</strong> ${filme.duration} minutos</p>
                <p><strong>Classificação indicativa:</strong> ${filme.classificacao_etaria > 0 ? filme.classificacao_etaria + ' anos' : 'Livre'}</p>
            </div>
        `
    })
}

buscarFilmes()