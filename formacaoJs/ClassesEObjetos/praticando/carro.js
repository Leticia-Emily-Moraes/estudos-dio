class carro{
    marca
    cor
    CombPorKm

    constructor(marca, cor, CombPorKm){
        this.marca = marca;
        this.cor = cor;
        this.CombPorKm = CombPorKm;
    }

    calculagasto(kmViajem, precoCombus){
        let gasto = (kmViajem / this.CombPorKm) * precoCombus
        return gasto
    }
}

const carro1 = new carro('Fiat', 'Vermelho', 10)

console.log(carro1)

const gasto = carro1.calculagasto(100, 5)
console.log(`O gasto total da viajem foi de R$${gasto.toFixed(2)}`)