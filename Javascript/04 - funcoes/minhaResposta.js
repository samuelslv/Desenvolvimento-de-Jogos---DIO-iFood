/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
    etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarJurosOUdesconto(valor, porcentagem) {
    return valor * porcentagem;
}

function calculaPreco(preco, condicao) {
    if (condicao === 'debito') {
        console.log('Valor a pagar: R$' + aplicarJurosOUdesconto(preco, 0.90).toFixed(2));
    } else if (condicao === 'PIX' || condicao === 'dinheiro') {
        console.log('Valor a pagar: R$' + aplicarJurosOUdesconto(preco, 0.85).toFixed(2));
    } else if (condicao === '2x') {
        console.log('Valor a pagar: R$' + preco.toFixed(2));
    } else if (condicao === '+2x') {
        console.log('Valor a pagar: R$' + aplicarJurosOUdesconto(preco, 1.10).toFixed(2));
    } else {
        console.log('Diga a forma de pagamento')
    }
}

(function () {
    const preco = 100; // Preço normal de etiqueta do produto
    let condicao = '+2x';// debito, pix(especie), 2x,+2x com juros
    calculaPreco(preco, condicao);
})();