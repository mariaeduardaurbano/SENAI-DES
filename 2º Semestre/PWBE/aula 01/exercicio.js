//Exercicio 1
var nome = "Maria Eduarda";
console.log("Olá, "+nome+"!");
console.log("-------------------------------");

//Exercicio 2
var a = 30;
var b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("-------------------------------");

//Exercicio 3
var altura = 20;
var largura = 50;
console.log("Área do retângulo é: " + (altura * largura));
console.log("-------------------------------");

//Exercicio 4
var nascimento = 2009;
console.log("Idade: " + (2025 - nascimento));
if ((2025 - nascimento) >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}
console.log("-------------------------------"); 

//Exercicio 5
var numero = 5;
if (numero % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
} 
console.log("-------------------------------");

//Exercicio 6
var n1 = 2;
var n2 = 8;
var n3 = 5;
if((n1 + n2 + n3) / 3 >= 9){
    console.log("A");
} else if((n1 + n2 + n3) / 3 >= 7){
    console.log("B");
} else if((n1 + n2 + n3) / 3 >= 5){
    console.log("C");
} else {
    console.log("Reprovado");
}

/*Tabela
  9 -10 = A
  7 - 8 = B       
  5 - 6 = C
  4 - 0 = Reprovado
 */

  console.log("-------------------------------");

//Exercicio 7 
 for(let i = 30; i >= 0; i--){
        console.log("I - " + i);
    }
     console.log("-------------------------------");

//Exercicio 8 

    for(let i = 0; i <= 500; i+=3){
        console.log("I - " + i);
    }
     console.log("-------------------------------");

//Exercicio 9 
    for(let i = 0; i <=300; i++){
        if(i % 2 == 0){
            console.log("I - " + i);
        }
    }

  console.log("-------------------------------");

//Exercicio 10
    var fatorial = 1

    for(let i = 1; i <= 5; i++){
        fatorial = fatorial * i;
    }

    console.log(fatorial);

    console.log("-------------------------------");