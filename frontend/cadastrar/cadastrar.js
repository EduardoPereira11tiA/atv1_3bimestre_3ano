async function cadastrarFilme() {
    const inputTitulo = document.getElementById("titulo")
    const inputGenero = document.getElementById("genero")
    const inputClassificacao_etaria = document.getElementById("classificacao_etaria")
    const inputDuration = document.getElementById("duration")

    if (inputTitulo.value === "" || inputGenero.value === "" || inputClassificacao_etaria.value === "" || inputDuration.value === "") {
        alert("Preencha todas as informações!")
        return
    }

    const filme = {
        titulo: inputTitulo.value,
        genero: inputGenero.value,
        classificacao_etaria: inputClassificacao_etaria.valueAsNumber,
        duration: inputDuration.valueAsNumber
    }

    const informacoesAEnviar = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    }

    const resposta = await fetch("https://atv1-3bimestre-3ano-zd19.vercel.app/add-movie", informacoesAEnviar)
    const mensagemDecifrada = await resposta.json()

    alert(mensagemDecifrada.message)

    window.location.href = "../index.html"
}