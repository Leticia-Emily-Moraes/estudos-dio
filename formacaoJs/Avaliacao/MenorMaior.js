const {gets, print} = require('./funcaoMenorMaior')

const QuantNum = gets()
let MaiorNumPar = 0
let MenorNumImpar = 0

for (let i = 0; i < QuantNum; i++) {
    const num = gets();
    if(num % 2 == 0){
        maiorPar(num)
    }else{
        menorImpar(num)
    }   
}

print("Maior par: " + MaiorNumPar)
print("Menor impar: " + MenorNumImpar)

function maiorPar(num){
    if(MaiorNumPar < num){
        MaiorNumPar = num
    }
}

function menorImpar(num){
    MenorNumImpar = num
    if(MenorNumImpar > num){
        MenorNumImpar = num
    }
}
