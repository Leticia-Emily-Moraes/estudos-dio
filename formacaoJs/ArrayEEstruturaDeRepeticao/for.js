const notas = []

notas.push(8)
notas.push(10)
notas.push(5)
notas.push(6)
notas.push(10)

console.log(notas)  

console.log(notas.length)

let soma = 0

for (let x = 0; x < notas.length; x++) {
    let nota = notas[x]
    soma = nota + soma
}

const media = soma / notas.length
console.log(media)