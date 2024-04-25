class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let IMC = this.peso / (Math.pow(this.altura, 2))
        return IMC
    }


    ClassificaIMC() {
        const IMC = this.calcularIMC()
        if (IMC < 18.5) {
            return "Abaixo do peso"
        } else if (IMC > 18.5 && IMC < 25) {
            return "Peso Normal"
        } else if (IMC > 25 && IMC < 30) {
            return "Acima do peso"
        } else if (IMC > 30 && IMC < 40) {
            return "Obeso"
        } else {
            return "Obesidade Grave"
        }
    }

    Dizer(){
        console.log(`Ola, meu nome é ${this.nome}, tenho ${this.peso}Kg, ${this.altura}m de altura e meu IMC é ${this.calcularIMC().toFixed(2)} (${this.ClassificaIMC()})`)

    }
}

const Jose = new pessoa('José', 70, 1.75)
Jose.Dizer()