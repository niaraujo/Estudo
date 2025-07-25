/*Peça uma senha e compare com a senha correta (por exemplo, “1234”). Se for igual, mostre “Acesso permitido”. Se estiver errada, mostre “Acesso negado”.*/

const SenhaCerta = "1234Senha";
let SenhaSolicitada = prompt("informe a senha");
if(SenhaSolicitada == SenhaCerta){
    alert("Acesso permitido");
}else{
    alert("Acesso negado");
}