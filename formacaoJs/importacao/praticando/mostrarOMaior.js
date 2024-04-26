const { gets, print } = require('./funcoes')

const alunos = gets();
let maiornum = 0

for (let i = 0; i < 5; i++) {
    const numsSorteado = gets();
    if (numsSorteado > maiornum) {
        maiornum = numsSorteado
    }
}

print(maiornum)