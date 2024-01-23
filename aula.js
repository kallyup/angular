
const gastoCombustivelKM = 10;
let distancia= 100;
let etanol= 5.79;
let gasolina = 6.66;
let tipoCombustivel = "gasolina";
let viagem=0;

const litrosConsumidos = distancia/ gastoCombustivelKM;
if(tipoCombustivel === "gasolina"){
    let viagem = litrosConsumidos*etanol;
    console.log(viagem.toFixed(2));
}else{
    let viagem = litrosConsumidos*gasolina;
    console.log(viagem.toFixed(2));
}


const nota1 = 9;
const nota2 = 4;
const nota3 = 7;
const media = (nota1 + nota2 +nota3)/3;

if(media <5){
    console.log("reprovado");
}else if(media <7){
    console.log("recuperação");
}else{
    console.log("aprovado");
}
const peso = 80;
const altura = 1.60;
const imc = peso / Math.pow(altura,2);

if(imc<18.5){
    console.log("desnutrição");
}else if(imc < 25){
    console.log("peso normal");
}else if(imc <30){
    console.log("acima do peso");
}else{
    console.log("vai morrer");
}

const preco = 100;
const formaPagamento = 4;

if(formaPagamento===1){
    console.log(preco-(preco*0.1));
}else if(formaPagamento===2){
    console.log(preco-(preco*0.15));
}else if(formaPagamento===3){
    console.log("preco");
}else{
    console.log(preco+(preco*0.1));
}
