//const funcoes = require('./funcoesAuxiliares'); //import do arquivo funcoesAuxiliares.js
const { gets, print } = require('./funcoesAuxiliares'); //destructuring

print("Hello world")

const pessoa ={
    nome: 'joao'
}

const { nome } = pessoa //destructuring - extrair o que quiser de um objet