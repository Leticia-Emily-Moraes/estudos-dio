function main() {
    console.log("principal")
    teste(); //chamando a função
    sayMyName("João");
    console.log(quadradoDeUmNumero(5));
    console.log(IncrementaJuros(100, 10));
}

main();

function teste() { //sintaxe de declaração de funçaõ
    console.log("Teste de função");
}

function sayMyName(name) { //funcao com parametro
    console.log("Your name is: " + name);
}

function quadradoDeUmNumero(num) {
    return num * num;
}// função com um parametro e retorno

function IncrementaJuros(valor, perJuros) {
    const juros = valor * (perJuros / 100);
    return valor + juros;
} // função com dois parametros e retorno