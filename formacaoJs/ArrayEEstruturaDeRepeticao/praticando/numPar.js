const listaNum = [1,2,3,4,5,6,7,8,9,10]

for (let x = 0; x < listaNum.length; x++) {
    const element = listaNum[x];
    if(element % 2 === 0){
        console.log(element)
    }
}