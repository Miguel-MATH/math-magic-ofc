function salvarMensagem(dados) {
    let storage = localStorage
    storage.setItem("Mensagens", JSON.stringify(dados))
}

function obterDados() {
    if (localStorage.getItem("Mensagens")) {
        return JSON.parse(localStorage.getItem("Mensagens"))
    } else {
        return null
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

function salvarLike(id, lista, like) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][2] == id) {
            lista[i][3] = lista[i][3] + like
            break
        }
    }
    return lista
}

function exibir(id, lista, label) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][2] == id) {
            label.innerText = "👍" + lista[i][3]
            break
        }
    }
}

function AdicionarId(usuarios, email, id) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            usuarios[i].likes[usuarios[i].likes.length] = id
            return usuarios
        }
    }
}

function salvarDadosDoUsuario(usuarios) {
    let storage = localStorage
    storage.setItem("Usuarios", JSON.stringify(usuarios))
}

function removerItem(lista, item) {
    let nova = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] != item) {
            nova[nova.length] = lista[i]
        }
    }
    return nova
}

function RemoverId(usuarios, email, id) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            for (let j = 0; j < usuarios[i].likes.length; j++) {
                if (usuarios[i].likes[j] == id) {
                    usuarios[i].likes = removerItem(usuarios[i].likes, id)
                    break
                }
            }
        }
    }
    return usuarios
}

function curtir(id, element, label) {
    let dadosUser = dadosUsuario()
    let lista = obterDados()
    console.log(dadosUsuario())
    console.log(obterDadosUsuarios())
    if (dadosUser && lista) {
        let listaUser = obterDadosUsuarios()
        if (element.checked == true) {
            lista = salvarLike(id, lista, +1)
            listaUser = AdicionarId(listaUser, dadosUser.email, id)
        } else {
            lista = salvarLike(id, lista, -1)
            listaUser = RemoverId(listaUser, dadosUser.email, id)
        }
        if (listaUser) {
            salvarDadosDoUsuario(listaUser)
        } else {
            alert("Não encontramos este usuario")
        }
        salvarMensagem(lista)
        exibir(id, lista, label)
    }
}

function mensagensJaCurtidas() {
    let lista = document.getElementsByClassName("Comentario")
    let dadosUser = obterDadosUsuarios()
    let usuarioAtivo = dadosUsuario()
    if (lista) {
        if (dadosUser) {
            if (usuarioAtivo) {
                for (let i = 0; i < lista.length; i++) {
                    for (let j = 0; j < dadosUser.length; j++) {
                        if (dadosUser[j].email == usuarioAtivo.email) {
                            for (let b = 0; b < dadosUser[j].likes.length; b++) {
                                if (dadosUser[j].likes[b] == lista[i].id) {
                                    lista[i].querySelector("input").checked = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}