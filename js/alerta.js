function DesativarDisplay() {
    let Fundo = document.getElementById("FundoAlerta")
    Fundo.style.display = "none"
    let DivAlerta = document.getElementById("Alerta")
    let Visor = DivAlerta.querySelector("p")
    DivAlerta.style.display = "none"
    Visor.innerText = ""
    let Body = document.body
    Body.style.overflow = false
}

function Alertar(texto) {
    let Fundo = document.getElementById("FundoAlerta")
    Fundo.style.display = "block"
    let DivAlerta = document.getElementById("Alerta")
    let Visor = DivAlerta.querySelector("p")
    DivAlerta.style.display = "flex"
    Visor.innerText = texto
}