/*Exercício 3 – Verificar o turno. Peça ao usuário para digitar o turno que estuda (M para manhã, T para tarde ou N para noite) e mostre uma saudação apropriada.*/

let Turno = (prompt("Digite o turno deste momento: M = Manhã / T = Tarde / N = Noite"));
if(Turno == "M"){
    alert("Bom dia!")
}else if(Turno == "T"){
    alert("Boa tarde!")
}else if(Turno == "N"){
    alert("Boa noite!")
}else{
    alert("Dado não corresponde ao solicitado.")
}


