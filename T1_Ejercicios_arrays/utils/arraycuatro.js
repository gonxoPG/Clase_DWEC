const baraja = [];


const valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const palos = ["C", "D", "R", "P"];

for (const palo of palos) {

    for (const valor of valores) {

        baraja.push(valor + palo);
    }
}

/* console.log(baraja); */

// carta barajada con Underscore

console.log(_.suffle(baraja));

// sacar por consola cartas de la baraja cada 5 segundos y retirar la carta de la baraja
    /* 
    Formato:
        Carta KC
        Valor: 13
        Palo: C 
    */

