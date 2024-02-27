
let prcComb = 5.79; //valor por Litro
let gastoMedio = 101; // Km/L
let dist = 100; //Km

const valorGasto = (dist/gastoMedio)*prcComb;

console.log('Gasto para realizar a vigaem: R$' + valorGasto);
console.log('Gasto para realizar a vigaem: R$' + valorGasto.toFixed(2) ); // arrendodar
