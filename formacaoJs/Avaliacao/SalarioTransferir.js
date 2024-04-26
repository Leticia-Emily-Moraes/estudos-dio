const {gets, print} = require('./funcaoSalarioTransferir')

const SalarioBruto = gets()
const Beneficios = gets()
let SalarioTransferido = 0

print("O Salário a ser transferido é: R$" + CalcSalario(SalarioBruto, Beneficios))

function CalcImposto(salario){
    if(salario <= 1100){
        return salario * 0.05
    }else if(salario > 1100 && salario <= 2500){
        return salario * 0.10
    }else{
        return salario * 0.15
    }
}

function CalcSalario(SalarioBruto, Beneficios){
    let Imposto = CalcImposto(SalarioBruto)
    SalarioTransferido = SalarioBruto - Imposto + Beneficios
    return SalarioTransferido
}