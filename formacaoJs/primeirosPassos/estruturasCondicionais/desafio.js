const PrecoGasolina = 5.27;
const PrecoEtanol = 4.27;
const CombusPorKm = 16;
const isGasolina = false
const KmViajem = 300;

const ConsumoLitro = (KmViajem / CombusPorKm)

if (isGasolina) {
    let gastoViagem = ConsumoLitro * PrecoGasolina
    console.log("O consumo de gasolina para uma viagem de " + KmViajem + "km é de " + ConsumoLitro + " litros e o preco fica em r$ " + gastoViagem.toFixed(2))
} else {
    let gastoViagem = ConsumoLitro * PrecoEtanol
    console.log("O consumo de etanol para uma viagem de " + KmViajem + "km é de " + ConsumoLitro + " litros e o preco fica em r$ " + gastoViagem.toFixed(2))
}



