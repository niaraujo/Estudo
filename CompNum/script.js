//Exercício 4 – Comparar dois números // Peça dois números ao usuário e informe qual é o maior, ou se eles são iguais.
let CompNumero1 = Number(prompt("Informe o primeiro número"));
let CompNumero2 = Number(prompt("Informe o segundo número"));
if(CompNumero1 > CompNumero2){
    alert(`O ${CompNumero1} é Maior`);
}else if(CompNumero1 < CompNumero2){
    alert(`O número ${CompNumero2} é maior`);
}else if(CompNumero1 == CompNumero2){
    alert(`Os dois números são iguais`);
}
