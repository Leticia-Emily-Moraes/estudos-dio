const alunos = ['joão', 'maria', 'vitor'] // Uma estrutura de Lista/array

console.log(alunos) 
console.log(alunos[0]) // joão na posição 0
console.log(alunos[1]) // maria na posição 1
console.log(alunos[2]) // joão na posição 2
console.log(alunos[3]) // indefinido na posição 3

alunos.push('jose') // Adiciona um novo elemento na lista, no final da lista

console.log(alunos[3]) // indefinido na posição 3 não é mais indefinido

console.log(alunos) //tem 4 elementos

alunos.pop() // Remove o ultimo elemento da lista

console.log(alunos) // agora tem 3