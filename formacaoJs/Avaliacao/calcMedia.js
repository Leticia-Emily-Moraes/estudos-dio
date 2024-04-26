const {gets, print} = require('./funcaoMedia')

const media = gets()
print(media)
print(defineCase(media))

function defineCase(media){
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5 && media < 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}