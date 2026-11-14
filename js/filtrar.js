function SelecionarAsMaterias() {
    let ListaTopicos = document.getElementsByClassName("Topicos");
    let MateriasEscolhidas = [];

    for (let i = 0; i < ListaTopicos.length; i++) {
        if (ListaTopicos[i].checked == true) {
            MateriasEscolhidas[MateriasEscolhidas.length] = ListaTopicos[i].value;
        }
    }

    return MateriasEscolhidas;
}

function SelecionarAnos() {
    let ListaAnos = document.getElementsByClassName("Anos");
    let AnosEscolhidos = [];
    for (let i = 0; i < ListaAnos.length; i++) {
        console.log(ListaAnos[i].checked)
        if (ListaAnos[i].checked == true) {
            AnosEscolhidos[AnosEscolhidos.length] = ListaAnos[i].value
        }
    }
    return AnosEscolhidos
}

function ExibirQuestoes(Materias, Anos) {
    for (let i = 0; i < BancoDeQuestoes.length; i++) {
        let Pmateria = false
        let Pano = false
        for (let b = 0; b < BancoDeQuestoes[i].Materias.length; b++) {
            for (let c = 0; c < Materias.length; c++) {
                if (Materias[c] == BancoDeQuestoes[i].Materias[b]) {
                    Pmateria = true
                }
            }
        }
        for (let b = 0; b < Anos.length; b++) {
            if (Anos[b] == BancoDeQuestoes[i].Ano) {
                Pano = true
            }
        }
        if (Pmateria == true && Pano == true) {
            let IdQuestao = BancoDeQuestoes[i].Id
            let EnunciadosQuestao = BancoDeQuestoes[i].Enunciados
            let FonteQuestao = BancoDeQuestoes[i].Fonte
            let RespostasQuestao = BancoDeQuestoes[i].Opcoes
            let LetraCertaQuestao = BancoDeQuestoes[i].LetraCorreta
            let TopicosDaQuestao = BancoDeQuestoes[i].Materias
            CriarModelo(IdQuestao, EnunciadosQuestao, FonteQuestao, RespostasQuestao, LetraCertaQuestao, TopicosDaQuestao)
        }
    }
}

function Filtrar() {
    // Vetor com as questoes: BancoDeQuestoes
    let DivComAsQuestoes = document.getElementById("Questoes")
    DivComAsQuestoes.innerHTML = '<h1 id="Titulo">Questões</h1>'

    let Materias = SelecionarAsMaterias()
    let Anos = SelecionarAnos()

    if (Materias.length == 0 && Anos.length > 0) {
        Alertar("Selecione um Tópico ao menos")
    }
    if (Materias.length > 0 && Anos.length == 0) {
        Alertar("Selecione um ano ao menos")
    }
    if (Materias.length == 0 && Anos.length == 0) {
        Alertar("Selecione um tópico e um ano ao menos")
    }
    if (Materias.length > 0 && Anos.length > 0) {
        ExibirQuestoes(Materias, Anos)
    }

    MathJax.typesetPromise();
}