function EnviarDados(usuarios) {
    let storage = localStorage
    storage.setItem("Usuarios", JSON.stringify(usuarios))
}

function VerificarSenha(senha1, senha2) {
    return senha1 == senha2
}

function AdicionarUsuario(user) {
    let storage = localStorage
    let Dados = storage.getItem("Usuarios")
    if (Dados) {
        let lista = JSON.parse(Dados)
        lista[lista.length] = user
        return lista
    } else {
        return [user]
    }
}

function verificarEmails(email) {
    let storage = localStorage
    let usuarios = JSON.parse(storage.getItem("Usuarios"))
    if (usuarios) {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == email) {
                return true
            }
        }
    }
    return false
}

function Cadastrar() {
    let form = document.getElementById("formulario")
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let senha_confimar = document.getElementById("confirmar").value
    if (form.reportValidity()) {
        if (!verificarEmails(email)) {
            if (VerificarSenha(senha, senha_confimar)) {
                let usuario = {}
                usuario.nome = nome
                usuario.email = email
                usuario.senha = senha
                usuario.pontos = 0
                usuario.likes = []
                let usuarios_novos = AdicionarUsuario(usuario)
                EnviarDados(usuarios_novos)
                alert("Cadastro realizado com sucesso!")
            } else {
                alert("As senhas não correspondem!")
            }
        } else {
            alert("Este e-mail ja está cadastrado!")
        }
    }

}
