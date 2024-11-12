let numeroPedido;
let continuar;

do {

    numeroPedido = prompt("Introduce un número");

if (numeroPedido <= 0 || numeroPedido == null) {
    alert("Dato introducido no válido.");
    
    console.log(numeroPedido);
    
    
    continuar = confirm("¿Quieres volver a intentarlo?");
}

} while (continuar);

console.log(`El usuario quiere ${numeroPedido} filas`);

let cajon = [];

for (let index = 0; index < numeroPedido; index++) {
    cajon.push("+");    
    console.log(cajon);
}

