/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

function ePar(list){
    for(i=0; i < list.length; i++){
        if (list[i] % 2 == 0){
            console.log(`O ${list[i]} é par`)
        }
    }
}


(function (){
    const list = [14,15,20,34,39,68,95,61,27,54,62,63,31,145,182,9648,104,520,47,84120,510,4104,21,5,19,98];
    console.log(list[14]);
    ePar(list);
})();