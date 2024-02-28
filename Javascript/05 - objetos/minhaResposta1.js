/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro{
    marca;
    cor;
    km_por_litro;

    constructor(marca,cor,km_por_litro){
        this.marca = marca;
        this.cor = cor;
        this.km_por_litro = km_por_litro;
    }

    consumo(dist, preco){
        return (dist/this.km_por_litro) * preco;
    }
}

(function (){
    let onix = new carro('chevrolet', 'cinza', 14);
    console.log('O gasto sera de R$' + onix.consumo(260,2.5).toFixed(2));
})();