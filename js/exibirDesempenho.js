function MostrarDesempenho() {
    let Visor = document.getElementById("Desempenho")
    let FundoDesempenho = document.getElementById("FundoDesempenho")
    if (getComputedStyle(Visor).display == "none") {
        Visor.style.display = "block"
        FundoDesempenho.style.display = "block"
    } else {
        Visor.style.display = "none"
        FundoDesempenho.style.display = "none"
    }
}

function Limpar() {
    let Acertos = document.getElementById("StatAcertos")
    let Erros = document.getElementById("StatErros")
    let Questoes = document.getElementById("StatTotal")
    let Aproveitamento = document.getElementById("StatPorcentagem")
    Acertos.innerText = "0"
    Erros.innerText = "0"
    Questoes.innerText = "0"
    Aproveitamento.innerText = "0.00%"
    document.getElementById("DetalheGeo").innerText = 0
    document.getElementById("DetalheAlg").innerText = 0
    document.getElementById("DetalheComb").innerText = 0
    document.getElementById("DetalheTn").innerText = 0

    let Geometria = document.getElementById("ValorGeo")
    let Algebra = document.getElementById("ValorAlg")
    let Combinatoria = document.getElementById("ValorComb")
    let TeoriaDosNumero = document.getElementById("ValorTn")

    Geometria.innerText = 0.00 + "%"
    Algebra.innerText = 0.00 + "%"
    Combinatoria.innerText = 0.00 + "%"
    TeoriaDosNumero.innerText = 0.00 + "%"

    let BarraGeo = document.getElementById("BarraGeo")
    let BarraAlg = document.getElementById("BarraAlg")
    let BarraComb = document.getElementById("BarraComb")
    let BarraTn = document.getElementById("BarraTn")

    BarraGeo.style.height = 0 + "%"
    BarraAlg.style.height = 0 + "%"
    BarraComb.style.height = 0 + "%"
    BarraTn.style.height = 0 + "%"
}

function AdicionaDadosAoDesempenho(Acerto, TopicosDaQuestao) {
    let Acertos = document.getElementById("StatAcertos")
    let Erros = document.getElementById("StatErros")
    let Questoes = document.getElementById("StatTotal")
    let Aproveitamento = document.getElementById("StatPorcentagem")
    if (Acerto == true) {
        Acertos.innerText = parseInt(Acertos.innerText) + 1
    } else {
        Erros.innerText = parseInt(Erros.innerText) + 1
    }
    Questoes.innerText = parseInt(Questoes.innerText) + 1
    let porcent = parseInt(Acertos.innerText) / parseInt(Questoes.innerText) * 100
    Aproveitamento.innerText = porcent.toFixed(2) + "%"

    let Geometria = document.getElementById("ValorGeo")
    let Algebra = document.getElementById("ValorAlg")
    let Combinatoria = document.getElementById("ValorComb")
    let TeoriaDosNumero = document.getElementById("ValorTn")

    let GeoAc = parseInt(document.getElementById("DetalheGeo").innerText)
    let AlgAc = parseInt(document.getElementById("DetalheAlg").innerText)
    let CombAc = parseInt(document.getElementById("DetalheComb").innerText)
    let TnAc = parseInt(document.getElementById("DetalheTn").innerText)

    let AcertGeo = false;
    let AcertAlg = false;
    let AcertComb = false;
    let AcertTn = false;
    for (let i = 0; i < TopicosDaQuestao.length; i++) {
        for (let a = 0; a < Topicos.Geo.length; a++) {
            if (TopicosDaQuestao[i] == Topicos.Geo[a]) {
                if (Acerto == true && AcertGeo == false) {
                    GeoAc = GeoAc + 1
                    AcertGeo = true
                }
            }
        }
        for (let b = 0; b < Topicos.Alg.length; b++) {
            if (TopicosDaQuestao[i] == Topicos.Alg[b]) {
                if (Acerto == true && AcertAlg == false) {
                    AlgAc = AlgAc + 1
                    AcertAlg = true
                }
            }
        }
        for (let c = 0; c < Topicos.Comb.length; c++) {
            if (TopicosDaQuestao[i] == Topicos.Comb[c]) {
                if (Acerto == true && AcertComb == false) {
                    CombAc = CombAc + 1
                    AcertComb = true
                }
            }
        }
        for (let d = 0; d < Topicos.Tn.length; d++) {
            if (TopicosDaQuestao[i] == Topicos.Tn[d]) {
                if (Acerto == true && AcertTn == false) {
                    TnAc = TnAc + 1
                    AcertTn = true
                }
            }
        }
    }

    document.getElementById("DetalheGeo").innerText = GeoAc
    document.getElementById("DetalheAlg").innerText = AlgAc
    document.getElementById("DetalheComb").innerText = CombAc
    document.getElementById("DetalheTn").innerText = TnAc

    Geometria.innerText = (GeoAc * 100/ Questoes.innerText).toFixed(2) + "%"
    Algebra.innerText = (AlgAc * 100/ Questoes.innerText).toFixed(2) + "%"
    Combinatoria.innerText = (CombAc * 100/ Questoes.innerText).toFixed(2) + "%"
    TeoriaDosNumero.innerText = (TnAc * 100 / Questoes.innerText).toFixed(2) + "%"

    let BarraGeo = document.getElementById("BarraGeo")
    let BarraAlg = document.getElementById("BarraAlg")
    let BarraComb = document.getElementById("BarraComb")
    let BarraTn = document.getElementById("BarraTn")

    BarraGeo.style.height = (GeoAc * 100 / Questoes.innerText) + "%"
    BarraAlg.style.height = (AlgAc * 100 / Questoes.innerText) + "%"
    BarraComb.style.height = (CombAc * 100 / Questoes.innerText) + "%"
    BarraTn.style.height = (TnAc * 100 / Questoes.innerText) + "%"
}