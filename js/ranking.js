function ObterDados() {
    if (localStorage.getItem("Usuarios")) {
        return JSON.parse(localStorage.getItem("Usuarios"))
    }

    return null
}

function ExibirRanking() {
    let usuarios = ObterDados()

    if (usuarios) {
        let ListaOrdenada = usuarios;
        for (let i = 0; i < ListaOrdenada.length; i++) {
            for (b = i + 1; b < ListaOrdenada.length; b++) {
                if (ListaOrdenada[i].pontos < ListaOrdenada[b].pontos) {
                    let pessoa = ListaOrdenada[i]
                    ListaOrdenada[i] = ListaOrdenada[b]
                    ListaOrdenada[b] = pessoa
                }
            }
        }
        let corpo = document.getElementById("corpo")
        for (let i = 0; i < 5 && i < ListaOrdenada.length ; i++) {
            let linha = corpo.insertRow()
            let cell1 = linha.insertCell(0)
            let cell2 = linha.insertCell(1)
            cell1.innerText = ListaOrdenada[i].nome
            cell2.innerText = ListaOrdenada[i].pontos
        }
    } else {
        alert("Não há usuários cadastrados ainda")
    }
}

ExibirRanking()