class pessoas{
    nome;
    idade;
    anoDeNasc;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasc = 2024 - idade;
    } //pré definições de valores

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const Joao = new pessoas('João', 17) //com construtor


const Maria = new pessoas()
Maria.nome = "Maria"
Maria.idade = 30 //sem construtor

console.log(Joao)
console.log(Maria)

function ComparaPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }

}

ComparaPessoas(Joao, Maria);