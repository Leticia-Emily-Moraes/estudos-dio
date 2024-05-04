function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

pessoa.prototype.falar = function (){
    console.log(`${this.nome} está falando`)
}

const joao = new pessoa('Joao', '17')

console.log(joao)

joao.falar()