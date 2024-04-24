(function main() {
    const peso = 179;
    const Altura = 1.76;

    IMC = CalcImc(peso, Altura)

    console.log("IMC: " + IMC)
    console.log("Classificação: " + ClassificaIMC(IMC))

})() // função que invoca imediatamente

function CalcImc(Peso, Altura) {
    imc = Peso / Math.pow(Altura, 2) // função de potencia -> Math.pow(base, expoente) eleva a base ao expoente
    return imc.toFixed(2)
}

function ClassificaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc > 18.5 && imc < 25) {
        return "Peso Normal"
    } else if (imc > 25 && imc < 30) {
        return "Acima do peso"
    } else if (imc > 30 && imc < 40) {
        return "Obeso"
    } else {
        return "Obesidade Grave"
    }
}
