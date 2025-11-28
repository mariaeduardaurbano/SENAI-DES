const selectCategoria = document.querySelector("#categoria");
const inputValor = document.querySelector("#valor");
const btnFiltrar = document.querySelector("#filtrar");

const btnMenu = document.querySelector("#btn-menu");
const menuLateral = document.querySelector("#menu-lateral");

btnMenu.addEventListener("click", () => {
    if (menuLateral.style.left === "" ||
        menuLateral.style.left === "-200px"
    ) {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-200px";
    }
});

const produtos = [
    {
        imagem: "https://i.pinimg.com/736x/2a/77/fc/2a77fc9dd3472146361a26b477d180d1.jpg",
        nome: "Cachorro Vira-lata - Versão Flamenguista",
        valor: 100,
        categoria: 1
    },
    {
        imagem: "https://i.pinimg.com/736x/de/1b/fd/de1bfd1a8722ce3f76603997a5c03e45.jpg",
        nome: "Cachorro Piscadinha - Branco",
        valor: 5000,
        categoria: 2
    },
    {
        imagem: "https://i.pinimg.com/1200x/c9/ca/c9/c9cac91ae963cf84859b07e2e22ba489.jpg",
        nome: "Cachorro a a folou - Original",
        valor: 2500,
        categoria: 2
    },
    {
        imagem: "https://i.pinimg.com/736x/63/46/c6/6346c6ffd66588a07d9b4fa61a613f6f.jpg",
        nome: "Cachorro 'oi posso fala' - Marrom",
        valor: 1150,
        categoria: 1
    },
    {
        imagem: "https://i.pinimg.com/736x/7b/fe/f4/7bfef46d21ab0808107f9333f14f0131.jpg",
        nome: "Ministro Leandro Cachorro - Caramelo",
        valor: 900,
        categoria: 3
    }
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

var valorMax = 0;
produtos.forEach((produto) => {
    let novoCard = card.cloneNode(true);

    novoCard.querySelector("img").src = produto.imagem;
    novoCard.querySelector(".nome").innerHTML = produto.nome;
    novoCard.querySelector(".valor").innerHTML = "$ " + produto.valor;
    novoCard.querySelector(".categoria").innerHTML = produto.categoria;

    main.appendChild(novoCard);

    if (produto.valor > valorMax) {
        valorMax = Math.round(produto.valor); //arredonda o valor decimal
    }
});

inputValor.max = valorMax;

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", () => {
    main.childNodes.forEach((box) => {
        const conteudo = box.innerHTML;
        if (conteudo) {
            const nome = box.querySelector(".nome").innerHTML;
            if (nome.toLowerCase().includes(busca.value.toLowerCase())) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    });
});

btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();

    const catSel = selectCategoria.value;
    const valSel = Number(inputValor.value);

    main.childNodes.forEach((box) => {
        if (box.innerHTML) {
            const catBox = box.querySelector(".categoria").innerHTML;
            const valBox = Number (box.querySelector(".valor").innerHTML.split(" ")[1]);

           if ((catSel == 0 || catBox === catSel) && (valSel == 0 || valBox <= valSel)) {
                box.style.display = "block";
            } else {
                box.style.display = "none"
            }
        }
        });
});

inputValor.addEventListener("change", () => {
    document.querySelector("#spVal").innerHTML = "R$ " + inputValor.value;
});