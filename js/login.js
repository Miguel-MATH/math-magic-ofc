function ObterDados() {
    let storage = localStorage
    let Dados = storage.getItem("Usuarios")
    return JSON.parse(Dados)
}

function VerificarSenha(senha1, senha2) {
    return senha1 == senha2
}

function EncontrarPosicao(lista, email) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].email == email) {
            return i
        }
    }
    return null
}

function Login() {
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let lembrar = document.getElementById("lembrar").checked 
    let lista = ObterDados()
    if (lista) {
        let posicao = EncontrarPosicao(lista, email)
        if (posicao != null) {
            if (VerificarSenha(lista[posicao].senha, senha)) {
                console.log("Liberando a passagem!")
                let usuario = {}
                usuario.nome = lista[posicao].nome
                usuario.email = lista[posicao].email
                usuario.senha = lista[posicao].senha
                usuario.pontos = lista[posicao].pontos
                usuario.likes = lista[posicao].likes //armazenará o id
                if (lembrar) {
                    localStorage.setItem("usuarioAtivo", JSON.stringify(usuario))
                } else {
                    sessionStorage.setItem("usuarioAtivo", JSON.stringify(usuario))
                }
                window.location.href = "index.html"
            } else {
                alert("Você digitou a senha errada!")
            }
        } else {
            alert("Não encontramos este usuário")
        }
    } else {
        alert("Não há contas cadastradas no momento!")
    }

}