
const CamisaAzul = true;
const CamisaVermelha = false; //variaveis Boolean, verdadeiro ou falso

const num = 0; // = atribui um valor
const isNumeroPar =  (num % 2) === 0; // Porcentagem pega o resto de uma divisão, === remete a igualdade estrita
const isNumeroParcomTxt =  (num % 2) === "0"; // == remete a igualdade solta

console.log("o numero " + num + " é par? " + isNumeroPar)
console.log("o numero " + num + " é par? " + isNumeroParcomTxt)


if(num === 0){ //se a condição for verdadeira
    console.log("Numero Invalido")
}else if(isNumeroPar){ // se a condição anterior for falsa, ele vai para essa
    console.log("o numero " + num + " é par")
}else{ // se a condição for falsa
    console.log("o numero " + num + " é impar")
}