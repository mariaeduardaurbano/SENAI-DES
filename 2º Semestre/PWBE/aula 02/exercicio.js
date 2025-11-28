var numeros = [10, 15, 22, 34, 40, 45, 57, 60, 69, 73];

const imprime = (valor) => {
    console.log("pares -" + valor);
}

numeros.forEach((valor) => {
    if (valor % 2 == 0) {
        console.log("Número -" + valor);
    } 
});
