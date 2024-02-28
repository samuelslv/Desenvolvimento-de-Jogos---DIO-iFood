/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

function soma(num){
    for(i=0;i<10;i++){
        console.log(i + '+'+ num +' = ', num+i)
    }
}

function subtracao(num){
    for(i=0;i<10;i++){
        console.log(i + '-'+ num +' = ', num-i)
    }
}

function multiplicacao(num){
    for(i=0;i<10;i++){
        console.log(i + '*'+ num +' = ', num*i)
    }
}

function divisao(num){
    for(i=0;i<10;i++){
        console.log(i + '/'+ num +' = ', i/num)
    }
}

(function (){
    const num = 5;
    soma(num);
    console.log('------------------------');
    subtracao(num);
    console.log('------------------------');
    multiplicacao(num);
    console.log('------------------------');
    divisao(num);

})();