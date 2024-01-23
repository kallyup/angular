function calcularImac(peso, altura){
    return peso/ Math.pow(altura,2);
}
function classificacao(imc){
        if(imc<18.5){
        return "desnutrição";
    }else if(imc < 25){
        return "peso normal";
    }else if(imc <30){
        return "acima do peso";
    }else{
        return "vai morrer";
    }
}   
function main(){
    const peso = 80;
    const altura = 1.60;
    const imc = calcularImac(peso,altura);

    console.log(classificacao(imc));
}

main()

function escreveNome(nome){
    return "deb"
}


function verificaIdade(idade){
    if(idade<18){
        console.log("de menor");
    }else{
        console.log(escreveNome() +" é maior");
    }
}
verificaIdade(19)

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));