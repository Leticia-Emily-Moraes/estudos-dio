const precoProd = 45.00;
const MetodoPag = 5;

console.log("Valor Produto: R$ " + precoProd);

if(MetodoPag === 1){
    console.log("Metodo de pagamento: Débito")
    const ValorFinal = precoProd - (precoProd * 0.10)
    console.log("Valor final: R$ " + ValorFinal);
}else if(MetodoPag === 2){
    console.log("Metodo de pagamento: Dinheiro ou Pix")
    const ValorFinal = precoProd - (precoProd * 0.15)
    console.log("Valor final: R$ " + ValorFinal);
}else if(MetodoPag === 3){
    console.log("Metodo de pagamento: Crédito em até 2x")
    const ValorFinal = precoProd
    console.log("Valor final: R$ " + ValorFinal);
}else if(MetodoPag === 4){
    console.log("Metodo de pagamento: Crédito em mais de 2x")
    const ValorFinal = precoProd + (precoProd * 0.10)
    console.log("Valor final: R$ " + ValorFinal);
}else{
    console.log("Metodo de pagamento inválido");
}