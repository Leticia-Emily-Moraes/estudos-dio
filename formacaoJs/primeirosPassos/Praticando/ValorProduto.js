(function () {
    const precoProd = 100.00;
    const MetodoPag = 2;

    console.log("Valor Produto: R$ " + precoProd);

    console.log(MetodoPagamento(MetodoPag, precoProd));
})()

function MetodoPagamento(MetodoPag, precoProd) {
    if (MetodoPag === 1) {
        return "Débito - " + IncrementaDesconto(precoProd, 10)
    } else if (MetodoPag === 2) {
        return "Dinheiro ou Pix - " + IncrementaDesconto(precoProd, 15)
    } else if (MetodoPag === 3) {
        return "Crédito em até 2x - " + precoProd
    } else if (MetodoPag === 4) {
        return "Crédito em mais de 2x - " + IncrementaJuros(precoProd, 10)
    } else {
        return "Metodo de pagamento inválido"
    }
}

function IncrementaJuros(valor, perJuros) {
    const juros = valor * (perJuros / 100);
    return valor + juros;
}
function IncrementaDesconto(valor, perDesconto) {
    const Desconto = valor * (perDesconto / 100);
    return valor - Desconto;
}