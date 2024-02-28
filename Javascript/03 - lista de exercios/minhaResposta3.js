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

const preco = 100; // Preço normal de etiqueta do produto
let condicao = '2x'; // debito, pix(especie), 2x,+2x com juros
let valorFinal;

if(condicao === 'debito'){
    valorFinal = preco*0.90;
    console.log('Valor a pagar: R$' + valorFinal.toFixed(2));
}else if(condicao === 'PIX' || condicao === 'dinheiro'){
    valorFinal = preco*0.85;
    console.log('Valor a pagar: R$' + valorFinal.toFixed(2));
}else if(condicao === '2x'){
    valorFinal = preco;
    console.log('Valor a pagar: R$' + valorFinal.toFixed(2));
}else if(condicao === '+2x'){
    valorFinal = preco*1.10;
    console.log('Valor a pagar: R$' + valorFinal.toFixed(2));
}else{
    console.log('Diga a forma de pagamento')
}