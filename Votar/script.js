//Peça a idade do usuário e informe se ele pode votar ou não pode votar.

let idade = Number(prompt("Informe sua idade:"));
if(idade >= 18){
    alert(`Você pode votar`);
}else if(idade >=16 && idade < 18){
    alert(`Seu voto é opcional`)
}else{
    alert(`você não pode votar pois tem menos que 16 anos.`);
}