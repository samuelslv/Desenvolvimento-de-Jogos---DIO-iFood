/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

function inicioV(nomes){
    for (let i = 0; i<nomes.length;i++){
        if(nomes[i][0]==="V"){
            console.log(nomes[i])
        }
    }
}


(function () {
    let nomes = ['Samuel', 'Suzana', 'Moises', 'Bete', 'Vinicius','Pedro', 'Vargas', 'Joao', 'Van', 'Gogh'];
    inicioV(nomes);
})();