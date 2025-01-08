// Crear una calculadora que determine el precio final de un producto después de aplicar un descuento.

let precio = Number(prompt("Indica el precio del producto:"));
let descuento = Number(prompt("Indica el descuento a aplicar:"));
let cuerpoHTML = document.querySelector("body");

function aplicarDescuento(precOriginal,desc) {
    let precioFinal = precOriginal - (precOriginal * (desc/100));

    return precioFinal;
}

let parrafo = document.createElement("p");
parrafo.innerHTML = `El precio final del producto es <b> ${aplicarDescuento(precio, descuento)} €</b>`;
cuerpoHTML.append(parrafo);