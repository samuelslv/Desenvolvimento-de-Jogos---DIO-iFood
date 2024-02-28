
let prcEtanol = 4.67;
let prcGasolina = 5.30;
let tipoComb = 'Gasolina';
let gastoMedio = 101; // Km/L
let dist = 100; //Km



if (tipoComb === 'Gasolina') {
    const valorGasto = (dist / gastoMedio) * prcGasolina;
    console.log('Gasto para realizar a vigaem com', tipoComb,': R$' + valorGasto.toFixed(2)); // arrendodar
} else if (tipoComb === 'Etanol') {
    const valorGasto = (dist / gastoMedio) * prcEtanol;
    console.log('Gasto para realizar a vigaem com', tipoComb,': R$' + valorGasto.toFixed(2)); // arrendodar
} else {
    console.log('É água')
}




