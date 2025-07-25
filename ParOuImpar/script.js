//Exercício 1 – Par ou ímpar - Peça um número ao usuário e informe se ele é par ou ímpar.
let NumParImp = Number(prompt("Informe um número"));
let calculo = NumParImp % 2;
if(calculo == 0){
    alert(`O número ${NumParImp} é Par`);
} else {
    alert(`O número ${NumParImp} é impar`);
}