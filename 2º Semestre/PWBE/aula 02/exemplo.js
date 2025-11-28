// var numeros = [1, 2, 3, 4, 5];
// var marcas = ["dell", "TPLink", "Cisco"];

// for(let i = 0; i < marcas.lenght; i++){
//     console.log(marcas[i]);
// }

// function soma (a, b){
//     let res = a + b;
//     return res;
// }

// console.log("Soma =" +soma(2, 10));


// const subtrai = (a, b) => {
//     console.log(a - b);
// };

// subtrai(5, 7);

// var carros = ["Celta", "Gol", "Kzin", "Uno Escada", "147", "Fusca"];

// const imprime = (valor) => {
//     console.log("modelo - " + valor);
// }

// carros.forEach((valor) => {
//     if (valor === "Uno Escada") {
//         console.log("Encontrei");
//     } else {
//         console.log("Não Encontrei");
//     }
// });


var usuarios = [
    {
        "Nome": "Fulano",
        "Sobrenome": "Souza",
        "Nascimento": 1990,
        "matricula": 1234,
        "telefone": "(11) 0 1848-3265"
    },
    {
        "Nome": "Beltrano",
        "Sobrenome": "Silva",
        "Nascimento": 1981,
        "matricula": 7894,
        "telefone": "(19) 1237-0707"
    },
    {
        "Nome": "Ciclano",
        "Sobrenome": "Oliveira",
        "Nascimento": 2001,
        "matricula": 9012,
        "telefone": "(13) 1456-0976"
    }
]

usuarios.forEach((usuario) => {
    if(usuario.matricula === 7894){
        let idade = 2025 - usuario.Nascimento;
        console.log("Nome: " + usuario.Nome + usuario.Sobrenome);
        console.log("Idade: " + idade);
    }
});