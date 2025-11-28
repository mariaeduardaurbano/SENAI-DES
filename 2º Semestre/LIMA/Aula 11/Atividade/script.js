const filtrar = document.querySelector("#filtrar");
const selStatus = document.querySelector("#status")

const chamados = [
    {
        "id": 2,
        "titulo": "Computador não liga após atualização",
        "solicitante": "Carlos Lima",
        "prioridade": "Média",
        "status": "Em andamento",
        "data": "2025-10-18"
    },
    {
        "id": 3,
        "titulo": "Problema na conexão Wi-Fi do escritório",
        "solicitante": "Marina Dias",
        "prioridade": "Baixa",
        "status": "Resolvido",
        "data": "2025-10-15"
    },
    {
        "id": 4,
        "titulo": "Sistema trava ao fazer login",
        "solicitante": "Rafael Santos",
        "prioridade": "Alta",
        "status": "Aberto",
        "data": "2025-10-22"
    },
    {
        "id": 5,
        "titulo": "Solicitação de novo e-mail corporativo",
        "solicitante": "Beatriz Melo",
        "prioridade": "Baixa",
        "status": "Em andamento",
        "data": "2025-10-19"
    },
    {
        "id": 6,
        "titulo": "Erro 404 ao acessar portal interno",
        "solicitante": "João Ferreira",
        "prioridade": "Média",
        "status": "Resolvido",
        "data": "2025-10-17"
    },
    {
        "id": 7,
        "titulo": "Impressora não aparece na rede",
        "solicitante": "Larissa Costa",
        "prioridade": "Média",
        "status": "Aberto",
        "data": "2025-10-23"
    },
    {
        "id": 8,
        "titulo": "Reset de senha de acesso ao sistema",
        "solicitante": "Felipe Nogueira",
        "prioridade": "Baixa",
        "status": "Resolvido",
        "data": "2025-10-14"
    }
];

const linha = document.querySelector(".linha");
const tbody = document.querySelector("tbody");

chamados.forEach((chamado) => {
    let novaLinha = linha.cloneNode(true);

    novaLinha.querySelector("id").src = chamado.id;
    novaLinha.querySelector(".titulo").innerHTML = chamado.titulo;
    novaLinha.querySelector(".solicitante").innerHTML = chamado.solicitante;
    novaLinha.querySelector(".prioridade").innerHTML = chamado.prioridade;
    novaLinha.querySelector(".status").innerHTML = chamado.status;
    novaLinha.querySelector(".data").innerHTML = chamado.data;

    tbody.appendChild(novaLinha);

    if (chamado.valor > valorMax) {
        valorMax = Math.round(chamado.valor); //arredonda o valor decimal
    }
});
