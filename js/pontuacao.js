function salvarPontuacaoStorage(dados) {
    let storage = localStorage
    storage.setItem("Usuarios", JSON.stringify(dados))
}

function salvarPontuacaoUsuarioAtivo(dados) {
    if (localStorage.getItem("usuarioAtivo")) {
        localStorage.setItem("usuarioAtivo", JSON.stringify(dados) )
    }
    if (sessionStorage.getItem("usuarioAtivo")) {
        sessionStorage.setItem("usuarioAtivo", JSON.stringify(dados) )
    }
}

function obterDadosUsuarios() {
    if (localStorage.getItem("Usuarios")) {
        return JSON.parse(localStorage.getItem("Usuarios"))
    } else {
        return null
    }
}

function dadosUsuario() {
    if (localStorage.getItem("usuarioAtivo")) {
        return JSON.parse(localStorage.getItem("usuarioAtivo"))
    }
    if (sessionStorage.getItem("usuarioAtivo")) {
        return JSON.parse(sessionStorage.getItem("usuarioAtivo"))
    }
    return null
}

function pontuar() {
    let usuario = dadosUsuario()
    let todosUsuarios = obterDadosUsuarios()
    for (let i = 0; i < todosUsuarios.length; i++) {
        if (usuario.email == todosUsuarios[i].email) {
            todosUsuarios[i].pontos++
            usuario.pontos++
        }
    }
    salvarPontuacaoStorage(todosUsuarios)
    salvarPontuacaoUsuarioAtivo(usuario)
    exibirUserDados()
}