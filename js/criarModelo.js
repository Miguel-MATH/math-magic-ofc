function EscolherMensagem(Lista) {
    let MensagensAcerto = [
        "Parabéns! Você acertou! 🎉",
        "Mandou muito bem! Continue assim! 💙",
        "Isso aí! Seu esforço está dando resultados! 🚀",
        "Resposta correta! Você está voando! 🔥",
        "Excelente! Mais uma questão dominada! 🧠",
        "Perfeito! Você está no caminho certo! ✅",
        "Muito bem! Conhecimento é poder! 📚",
        "Acertou em cheio! 🎯",
        "Boa! Continue desafiando seus limites! 💪",
        "É isso aí! A matemática não tem vez com você! 😎",
        "Resposta correta! Você está evoluindo a cada questão! 📈",
        "Brilhou! Essa questão não foi páreo para você! ✨",
        "Acertou! Todo o seu esforço está valendo a pena! 🏆",
        "Excelente raciocínio! Continue assim! 💡",
        "Mais um acerto para a conta! Você consegue! 🎊",
        "Sensacional! Você está mandando muito bem! 🌟",
        "Boa demais! Vamos para a próxima? 🔥",
        "Você conseguiu! Continue acreditando no seu potencial! 💙",
        "Correto! Cada vez mais perto da sua meta! 🎯",
        "Gabaritou essa! Partiu próximo desafio? 🚀",
        "Resposta certa! Seu conhecimento está crescendo! 🌱",
        "É assim que se faz! Parabéns pelo raciocínio! 👏",
        "Acertou! Você está construindo seu caminho para o sucesso! 🏆",
        "Muito bem! Que venham os próximos desafios! ⚡",
        "Você é muito Sigma, continue assim!"
    ];
    let MensagensErro = [
        "Você errou, mas na próxima você acerta! 💪",
        "Quase lá! Continue tentando!",
        "Errar faz parte do aprendizado. Não desista! 📚",
        "Dessa vez não deu, mas você está evoluindo!",
        "Uma questão de cada vez, você chega lá! 🚀",
        "Não desanime! Cada erro é uma oportunidade de aprender.",
        "Você consegue! Continue se dedicando! 💙",
        "Ainda não foi dessa vez. Vamos para a próxima?",
        "O importante não é nunca errar, mas aprender com cada erro!",
        "Todo grande matemático já teve dúvidas. Continue tentando!",
        "Calma! A matemática também exige persistência.",
        "Mais uma tentativa, mais uma oportunidade de aprender! 💡",
        "Você está no caminho! Não pare agora!",
        "Não acertou dessa vez, mas está um passo mais perto de dominar esse conteúdo!",
        "Respire fundo, revise o raciocínio e tente novamente!",
        "O erro de hoje pode ser o acerto de amanhã!",
        "Não foi dessa vez! Que tal revisar o conteúdo e tentar de novo?",
        "Cada desafio superado começa com uma tentativa!",
        "Continue firme! Seu esforço vai fazer a diferença!",
        "Não deixe uma questão difícil diminuir sua vontade de aprender!",
        "Não foi dessa vez! Mas cada tentativa ensina algo novo. 💡",
        "Quase lá! Aprender também é descobrir o que ainda precisamos melhorar. 🚀",
        "O resultado não foi o esperado, mas sua jornada continua. Vamos para a próxima? 💙",
        "Semper adde, semper ambula, semper profice"
    ];
    // Verificacao Se Errou Ou Nao
    let Errou = true;
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i].dataset.correta == "true" && Lista[i].querySelector("input").checked == true) {
            Errou = false
        }
    }
    let Escolha;
    let Classe;
    if (Errou) {
        Escolha = MensagensErro[Math.floor(Math.random() * (MensagensErro.length))]
        Classe = "FraseMotivadoraErrada"
    } else {
        Escolha = MensagensAcerto[Math.floor(Math.random() * (MensagensAcerto.length))]
        Classe = "FraseMotivadoraCerta"
    }
    return [Escolha, Classe]
}

function VerificarSeJaFoiSeleciona(Lista) {
    let Selecionada = false
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i].querySelector("input").checked == true) {
            Selecionada = true
        }
    }
    return Selecionada
}

function ExibirRespostas(Lista) {
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i].dataset.correta == "true") {
            Lista[i].classList.add("Correto");
        } else {
            Lista[i].classList.add("Errado");
        }
        Lista[i].querySelector("input").disabled = true;
    }
}

// Esta funcao ela cria as questões no html. Você deve passar o id dela.
// o id é a identificado ex: "Questao 35 ENEM dia 2 caderno azul".
// Enunciados dessa questão, pode ser imagem um texto etc lembrando
// que para passar a imagem deve ser o caminho dela até a pasta
//(A verificacao se é uma imagem ocorre ao verificar se as iniciais
//corresponde a "img" que é justamente o inicio do caminho até a imagem.)
//O enunciado deve ser um Array.
//As opções deve ser um Array.
function CriarModelo(Id, Enunciados, Fonte, Respostas, letracerta, TopicosDessaQuestao) {
    let NovaQuestao = document.createElement("div")
    NovaQuestao.className = "Modelo"
    document.getElementById("Questoes").appendChild(NovaQuestao)
    let DivCabecalho = document.createElement("div")
    DivCabecalho.className = "CabecalhoModelo"
    NovaQuestao.appendChild(DivCabecalho)
    let DivSigma = document.createElement("div")
    DivSigma.className = "SigmaModelo"
    DivSigma.innerText = "Σ"
    DivCabecalho.appendChild(DivSigma)
    let DivIdentificacao = document.createElement("div")
    DivIdentificacao.className = "IdentificacaoQuestao"
    DivCabecalho.appendChild(DivIdentificacao)
    let Identificador = document.createElement("h3")
    Identificador.innerText = Id
    DivIdentificacao.appendChild(Identificador)
    let LogoMarca = document.createElement("h6")
    LogoMarca.innerText = "Math Magic | Matemática"
    DivIdentificacao.appendChild(LogoMarca)
    let DivEnunciado = document.createElement("div")
    DivEnunciado.className = "Enunciado"
    NovaQuestao.appendChild(DivEnunciado)
    for (let i = 0; i < Enunciados.length; i++) {
        let Enum = Enunciados[i]
        let PossivelImagem = false
        if (Enum.length >= 3) {
            PossivelImagem = true
        }
        if (Enum[0] == "i" && Enum[1] == "m" && Enum[2] == "g" && PossivelImagem == true) {
            let DivParaImagem = document.createElement("div")
            DivParaImagem.className = "DivImagem"
            let Imagem = document.createElement("img")
            Imagem.className = "ImagemEnunciado"
            Imagem.src = Enum
            DivParaImagem.appendChild(Imagem)
            DivEnunciado.appendChild(DivParaImagem)
        } else {
            let EnunciadoEscrito = document.createElement("div")
            EnunciadoEscrito.innerText = Enum
            DivEnunciado.appendChild(EnunciadoEscrito)
        }
    }
    let DivFonte = document.createElement("div")
    DivFonte.className = "fonte"
    DivFonte.innerText = Fonte
    NovaQuestao.appendChild(DivFonte)
    let DivRespostas = document.createElement("div")
    DivRespostas.className = "Respostas Espacamento"

    NovaQuestao.appendChild(DivRespostas)
    let Ordem = ["A", "B", "C", "D", "E"]
    for (let i = 0; i < Respostas.length; i++) {
        let Respos = Respostas[i];

        let DivRes = document.createElement("label");
        DivRes.className = "Alternativa";

        let InputRes = document.createElement("input");
        InputRes.type = "radio";
        InputRes.name = "RespostaQuestao" + Id;
        InputRes.value = Ordem[i];

        DivRes.appendChild(InputRes);
        let Letra = document.createElement("h6");
        Letra.className = "Alinhar";
        Letra.innerText = Ordem[i] + ") ";
        DivRes.appendChild(Letra);
        let PossivelImagem = false;
        if (Respos.length >= 3) {
            PossivelImagem = true;
        }
        if (
            Respos[0] == "i" &&
            Respos[1] == "m" &&
            Respos[2] == "g" &&
            PossivelImagem == true
        ) {
            let Imagem = document.createElement("img");
            Imagem.src = Respos
            Imagem.alt = "Alternativa " + Ordem[i];
            DivRes.appendChild(Imagem);
        } else {
            let Texto = document.createElement("p");
            Texto.className = "TextoAlternativo";
            Texto.innerText = Respos;
            DivRes.appendChild(Texto);
        }
        if (letracerta == Ordem[i]) {
            DivRes.dataset.correta = "true";
        } else {
            DivRes.dataset.correta = "false";
        }
        DivRespostas.appendChild(DivRes);
    }
    let Button = document.createElement("button")
    Button.type = "button"
    Button.onclick = function () {
        let Selecionada = VerificarSeJaFoiSeleciona(DivRespostas.children)
        if (Selecionada == true) {
            ExibirRespostas(DivRespostas.children);
            Button.disabled = true
            let mensagem = EscolherMensagem(DivRespostas.children)
            let FraseMotivadora = document.createElement("h5")
            FraseMotivadora.innerText = mensagem[0]
            FraseMotivadora.className = mensagem[1]
            if (mensagem[1] == "FraseMotivadoraCerta") {
                AdicionaDadosAoDesempenho(true, TopicosDessaQuestao)
                pontuar()
            } else {
                AdicionaDadosAoDesempenho(false, TopicosDessaQuestao)
            }
            NovaQuestao.appendChild(FraseMotivadora)
        } else {
            Alertar("Você ainda não selecionou uma alternativa.")
        }
    };
    Button.className = "btn btn-success"
    Button.innerText = "Responder"
    NovaQuestao.appendChild(Button)
}