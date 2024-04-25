const Pessoa = {
    nome: "João",
    idade: 25,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`) //this é uma referência ao objeto
    } //função dentro do objeto
} //Objeto com valores dinamicos

console.log(Pessoa.nome)
console.log(Pessoa.idade)
console.log(Pessoa)

Pessoa.altura = 1.80 // Adicionando um novo atributo ao objeto

console.log(Pessoa)

//delete Pessoa.idade // Deletando um atributo do objeto

console.log(Pessoa)

Pessoa.descrever() //Chamando a função dentro do objeto

Pessoa.nome = "Maria" //Alterando o valor de um atributo
Pessoa.idade = 30

Pessoa.descrever()

Pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
} //alterando a função dentro do objeto
Pessoa.descrever()

console.log(Pessoa['nome']) //Acessando um atributo do objeto por meio de colchetes