var var1 = 10
var var2 = 'teste'

console.log(var1 - var2)

test()

function test(){
    console.log('teste')
}

var var3 = 10 //vaza escopo, a não ser de função

if (true){
    var var4 = 10
}
console.log(var4)
let varlet = 10 // não vaza escopo

if (true){
    let varlet1 = 10
}

console.log(varlet1)

const varconst = 10 // não pode ser alterada e não vaza

if (true){
    const varconst1 = 10
}

console.log(varconst1)