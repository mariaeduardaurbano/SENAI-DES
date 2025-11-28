var livros = [
    {
        "titulo":"Orgulho e Preconceito",
        "autor":"Jane Austen",
        "n_paginas":288
    },
    {
        "titulo":"A bibloteca da Meia-noite",
        "autor":"Matt Haig",
        "n_paginas":308
    }
]

livros.forEach((livro, i) => {
    if(livros.titulo === "Orgulho e Preconceito"){
        console.log(livro);
    } 
});

livros.forEach((livro, i) => {
    if(livro.titulo == "Orgulho e Preconceito") {
        livros.splice(i, 1);
    }
});

console.log(livros);

var novo = {
    "titulo":"O despertar da Senhorita Prim",
    "autor":"Fulana de tal",
    "n_paginas": 300
};

livros.push(novo);

livros.forEach((livro, i) =>{
    if(livro.titulo === "A biblioteca da Meia-noite"){
        livro.autor = "Matt Haig"
    }
});

console.log(livros);
// const livross = ["Orgulho e Preconceito", "Biblioteca da Meia-noite"];
// const total = livross.push("O Despertar da Senhorita Prim");

// console.log(livross); 
// console.log(total); 

