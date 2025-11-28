/* variáveis
     const - escopo global, valor não muda
     var - escopo global, pode usar a váriavel var em qualquer parte do mesmo arquivo
     let - escopo local, valor pode mudar
*/
const numero = 100;
var nome = "Fulano";
var idade = 50; 
var altura = 1.80;
var cnh = true;

console.log("Numero = " + numero);
console.log("Nome = " + nome); 

nome = "Beltrano"; // muda o valor da variável nome

//typeof() - indica o tipo da variável

console.log("Nome = " + nome + "(" + typeof(nome) + ")");//string
console.log("Idade = " + idade + "(" + typeof(idade) + ")");//number    
console.log("Altura = " + altura + "(" + typeof(altura) + ")");//number
console.log("CNH = " + cnh + "(" + typeof(cnh) + ")");//boolean

/*operadores aritméticos
    + soma +
    - subtração -
    /divisão /
    *multiplicação *        
    %módulo %
*/

var a = 10;
var b = 20;

console.log(a * b);

/*Operadores de comparação
    == igual 
    != diferente de
    > maior 
    >= maior igual
    < menor 
    <= menor igual
    === estritamente igual (valor e tipo)
    !== estritamente diferente (valor e tipo)
 */

    a = "10";
    b = 10;

    if (a === b) {
        console.log("a e b são iguais");
    } else {
        console.log("a e b são diferentes");
    }

    switch(a){
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }

    for(let i = 0; i < 10; i++){
        console.log("I - " + i);
    }

    a = 11;
    while(a < 10){
        console.log("teste");
        break;
    }

    do{

    }while(a < 10);