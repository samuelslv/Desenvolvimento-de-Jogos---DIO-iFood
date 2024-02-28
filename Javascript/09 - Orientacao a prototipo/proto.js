
/****** orientação a prototipo *****/
const pessoa = {
    genero: 'masculino'
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.genero)

/****** FUNÇÃO *****/
function PessoaFuncao(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
PessoaFuncao.prototype.falar = function () {
    console.log(`${this.nome} está falando`)
}

const samuel = new PessoaFuncao('samuel', 25)
samuel.falar()

class PessoaClasse {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const samuels = new PessoaClasse('samuels', 25)
samuels.falar()

const jose = {
    nome: 'Renan'
}

jose.__proto__ = {
    idade: 30
}

console.log(jose.idade);


function soma(x){
    return function(y){
        return x + y;
    }
}

const somaParcial = soma(10)
console.log(somaParcial(5)) // 1
console.log(somaParcial(21))
console.log(somaParcial(40))