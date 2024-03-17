
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("¡Bienvenido al convertidor de dólares a euros!");
console.log("Por favor, introduce la cantidad en dólares que deseas convertir.");


function convertirDolaresAEuros(dolares) {

  const tasaDeCambio = 0.85;

  const euros = dolares * tasaDeCambio;
 
  console.log(`$${dolares} dólares son aproximadamente €${euros.toFixed(2)} euros.`);
}


rl.question('Cantidad en dólares: ', (respuesta) => {

  const cantidadDolares = parseFloat(respuesta);

  if (isNaN(cantidadDolares)) {
    console.log("Por favor, introduce una cantidad válida en dólares.");
  } else {
  
    convertirDolaresAEuros(cantidadDolares);
  }
 
  rl.close();
});
