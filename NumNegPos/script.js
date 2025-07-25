//Exercício 2 – Número positivo, negativo ou zero. Peça um núm e diga se ele é positivo, negativo ou igual a zero.
let NumPosNeg = Number(prompt("Informe um número"));
if(NumPosNeg > 0){
    alert("O número é positivo");
}else if(NumPosNeg < 0){
    alert("O Número é negativo");
}else if(NumPosNeg == 0){
    alert("O número é igual a 0");
}else{
    alert("O número não corresponde ao solicitado")
}