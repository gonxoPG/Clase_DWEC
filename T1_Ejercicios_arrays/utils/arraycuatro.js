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

let barajaDesordenada = _.shuffle(baraja);

/* console.log(barajaDesordenada); */


// sacar por consola cartas de la baraja cada 5 segundos y retirar la carta de la baraja
    // ayuda IA


const intervalo = setInterval(() => {
    
    if (barajaDesordenada.length > 0) {
        const carta = barajaDesordenada.shift(); // Retira la primera carta
        console.log(carta); // Muestra la carta en consola
        /* 
        Falta formato:
            Carta KC
            Valor: 13
            Palo: C 
        */
    } else {
        clearInterval(intervalo); // Detiene el intervalo cuando no hay más cartas
        console.log("Se han mostrado todas las cartas.");
    }
}, 5000); // 5000 ms = 5 segundos
