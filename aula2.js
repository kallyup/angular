/*class pessoa {
    nome;
    idade;
    anoNasciment;
    constructor(nome, idade){
        this.nome = nome;
        this.idade= idade;
        this.anoNasciment = 2024- idade;
    }
    descrever(params) {
        console.log(`Meu nome é ${this.nome} minha idade é ${this.idade}`)
    }
}

const pessoa1 ={
    nome: "deb",
    idade: 25,

    descrever: function (){
      
        console.log(`Meu nome é ${this.nome} minha idade é ${this.idade}`)
    }
};


const luiz = new pessoa("luiz", 25);
console.log(luiz)

function compararPessoas(p1,p2){
    if(p1.idade> p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    }else if(p2.idade> p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a msm idade`)
    }
}
const deb = new pessoa("deb", 25);
const momo = new pessoa("anderson", 29);

compararPessoas(deb, momo)

class Carro{
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel){
        this.marca= marca;
        this.cor= cor
        this.gastoCombustivel = gastoCombustivel
    }
    calcularGasto(distancia, precoCombustivel){
        return distancia* this.gastoCombustivel*precoCombustivel
    }
}
const palio = new Carro("gol", "black",1/12);
const uno = new Carro("fiat", "red", 12)

console.log(palio.calcularGasto(70,5))
console.log(palio)

class Pessoa2{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome= nome;
        this.peso=peso;
        this.altura=altura;
    }
    calcularImc(){
        return this.peso/(this.altura*this.altura);
    }
    classificacao(){
        const imc= this.calcularImc();
        if(imc<18.5){
            return ("desnutrição");
        }else if(imc < 25){
            return ("peso normal");
        }else if(imc <30){
            return ("acima do peso");
        }else{
            return ("vai morrer");
        }
    }
    
}

const joana = new Pessoa2("joana", 50,1.6)
console.log(joana.classificacao())*/
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();

const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);