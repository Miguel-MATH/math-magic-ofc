function salvarMensagem(dados) {
    let storage = localStorage
    storage.setItem("Mensagens", JSON.stringify(dados))
}

function analisarId() {
    if (localStorage.getItem("Mensagens") != null) {
        return JSON.parse(localStorage.getItem("Mensagens")).length
    } else {
        return 0
    }
}

function adicionarMensagemAMatriz(nome, mensagem, id) {
    let mensagens = localStorage.getItem("Mensagens")
    if (mensagens != null) {
        mensagens = JSON.parse(mensagens)
        mensagens[mensagens.length] = [nome, mensagem, id, 0]
        return mensagens
    } else {
        return [[nome, mensagem, id, 0]]
    }
}

/* Exemplo de Modelo --------
<div class="Comentario">
    <span class="Avatar">L</span>
    <span class="ComentarioAutor"><strong>Lucas Ferreira</strong></span>
    <p class="ComentarioTexto">As questões de geometria do ENEM 2023 me ajudaram muito. Recomendo
        filtrar por tópico!</p>
    <button type="button" class="BtnCurtir" onclick="curtir()">👍 12</button>
</div>
---------
*/
function exibirMensagem(mensagens) {
    let listaComentarios = document.getElementById("ListaComentarios")
    listaComentarios.innerHTML = ""
    for (let i = 0; i < mensagens.length; i++) {
        let DivComentario = document.createElement("div")
        DivComentario.id = mensagens[i][2]
        DivComentario.className = "Comentario"
        listaComentarios.appendChild(DivComentario)
        let avatar = document.createElement("span")
        avatar.className = "Avatar"
        avatar.innerText = mensagens[i][0][0]
        DivComentario.appendChild(avatar)
        let autor = document.createElement("span")
        autor.className = "ComentarioAutor"
        DivComentario.appendChild(autor)
        let nome = document.createElement("strong")
        nome.innerText = mensagens[i][0]
        autor.appendChild(nome)
        let texto = document.createElement("p")
        texto.className = "ComentarioTexto"
        texto.innerText = mensagens[i][1]
        DivComentario.appendChild(texto)
        let labelLike = document.createElement("label")
        labelLike.className = "form-label"
        DivComentario.appendChild(labelLike)
        let contador = document.createElement("span")
        contador.innerText = "👍 " + mensagens[i][3]
        labelLike.appendChild(contador)
        let inputLike = document.createElement("input")
        inputLike.className = "form-check-input"
        inputLike.type = "checkbox"
        inputLike.onclick = function click() {
            curtir(mensagens[i][2], inputLike, contador)
        }
        labelLike.appendChild(inputLike)
    }
    mensagensJaCurtidas()
}

function cadastrarMensagem() {
    let form = document.getElementById("Form-Comentario")
    let nome = document.getElementById("CampoNome").value
    let texto = document.getElementById("CampoTexto").value
    let id = analisarId()
    if (form.reportValidity()) {
        let mensagens = adicionarMensagemAMatriz(nome, texto, id)
        salvarMensagem(mensagens)
        exibirMensagem(mensagens)
    }
}

if (localStorage.getItem("Mensagens") != null) {
    exibirMensagem(JSON.parse(localStorage.getItem("Mensagens")))
    mensagensJaCurtidas()
}