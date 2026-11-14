function logout() {
    if (localStorage.getItem("usuarioAtivo")) {
        localStorage.removeItem("usuarioAtivo");
    }
    if (sessionStorage.getItem("usuarioAtivo")) {
        sessionStorage.removeItem("usuarioAtivo");
    }

    window.location.href = "Login.html"
}

function exibirUserDados() {
    let dados;
    if (localStorage.getItem("usuarioAtivo")) {
        dados = localStorage.getItem("usuarioAtivo");
    }
    if (sessionStorage.getItem("usuarioAtivo")) {
        dados = sessionStorage.getItem("usuarioAtivo");
    }
    if (dados) {
        dados = JSON.parse(dados)
        let nome = document.getElementById("UsuarioNome")
        let email = document.getElementById("UsuarioEmail")
        let pontos = document.getElementById("pontos")
        nome.innerText = dados.nome
        email.innerText = dados.email
        pontos.innerText = dados.pontos
    }
    
}

exibirUserDados()