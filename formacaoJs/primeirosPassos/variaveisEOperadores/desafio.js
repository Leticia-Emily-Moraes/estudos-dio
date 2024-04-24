const PrecoCombus = 5.27;
const CombusPorKm = 16;
const KmViajem = 60;

const gastoViagem = (KmViajem / CombusPorKm) * PrecoCombus

console.log("O gasto para uma viagem de "+ KmViajem + "km com um carro que faz "+ CombusPorKm + "km/l, com a gasolina a R$"+ PrecoCombus + " é de R$" + gastoViagem)