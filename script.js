const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dos seguintes não é um subcampo da Inteligência Artificial?",
        alternativas: [
            {
                texto: "Aprendizado!",
                afrimacao: "afirmacao"
            },
            {
                texto: "Processamento de Linguagem Natural.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Realidade Virtual.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Visão Computacional.",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Qual é uma das principais técnicas de aprendizado utilizadas em IA?",
        alternativas: [
            {
                texto: "Algoritmos de Busca.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Álgebra Linear.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Métodos Estatísticos.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Programação Orientada a Objetos.",
                afirmacao: "afirmacao"
            },

            //"Algoritmos de Busca.",
            //"Álgebra Linear.",
            //"Métodos Estatísticos.",
            //"Programação Orientada a Objetos."
        ]
    },

    {
        enunciado: "Quais são os dois tipos principais de aprendizado de máquina?",
        alternativas: [
            {
                texto: "Supervisionado e Não Supervisionado.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Linear e Não Linear.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Simbólico e Estocástico.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Determinístico e Probabilístico.",
                afirmacao: "afirmacao"
            },

            //"Supervisionado e Não Supervisionado.",
            //"Linear e Não Linear.",
            //"Simbólico e Estocástico.",
            //"Determinístico e Probabilístico."
        ]
    },

    {
        enunciado: "Qual é a diferença entre Inteligência Artificial Geral (AGI) e Inteligência Artificial Estreita (ANI)?",
        alternativas: [
            {
                texto: "Supervisionado e Não Supervisionado.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Linear e Não Linear.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Simbólico e Estocástico.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Determinístico e Probabilístico.",
                afirmacao: "afirmacao"
            },

            //"AGI pode realizar tarefas variadas, enquanto ANI é especializada em uma única tarefa.",
            //"AGI é mais rápida que ANI em processamento de dados.",
            //"ANI é mais adaptável a novos cenários do que AGI.",
            //"AGI é apenas um termo antigo para ANI."
        ]
    },

    {
        enunciado: "Qual é um dos maiores desafios éticos relacionados à Inteligência Artificial?",
        alternativas: [
            {
                texto: "A falta de controle humano sobre as máquinas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A falta de aplicabilidade prática da IA.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Arápida evolução da IA, que dificulta a regulamentação.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A tendência da IA de se tornar muito amigável.",
                afirmacao: "afirmacao"
            },

            //"A falta de controle humano sobre as máquinas.",
            //"A falta de aplicabilidade prática da IA.",
            //"A rápida evolução da IA, que dificulta a regulamentação.",
            //"A tendência da IA de se tornar muito amigável."

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2029...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
