const peso = 179;
const Altura = 1.76;

const IMC = peso / Math.pow(Altura, 2) // função de potencia -> Math.pow(base, expoente) eleva a base ao expoente
console.log("IMC: " + IMC.toFixed(2))

if(IMC < 18.5){
    console.log("Abaixo do peso")
}else if(IMC > 18.5 && IMC < 25){
    console.log("Peso Normal")
}else if(IMC > 25 && IMC < 30){
    console.log("Acima do peso")
}else if(IMC > 30 && IMC < 40){
    console.log("Obeso")
}else{
    console.log("Obesidade Grave")
}