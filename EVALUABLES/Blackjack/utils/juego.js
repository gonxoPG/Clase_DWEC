// 1. pide prompt("Indica tu nombre:")

let nombreJugador = prompt("Indica tu nombre: ");

let baraja = [];
let palos = ["C", "T", "R", "P"];
let cartaImp;

console.log("Creando baraja...");

for (let index = 0; index < palos.length; index++) {
    for (let i = 1; i <= 13; i++) {

        switch (i) {
            // esto representa el objeto, que servirá para el título de la img
            // el valor solamente nos interesa el número (ya está hecho)
            case 11:
                baraja.push(new carta("J" + palos[index]));
                break;

            case 12:
                baraja.push(new carta("Q" + palos[index]));
                break;

            case 13:
                baraja.push(new carta("K" + palos[index]));
                break;

            default:
                baraja.push(new carta(i + palos[index]));

        }

    }

}

baraja = _.shuffle(baraja);
console.log("La baraja ha sido mezclada");

/* // sacar cartas
for (const carta of baraja) {
    console.log(carta.imagen);
} */


// 2. juega la banca (automático, mín 17puntos -> pasa turno auto):
    // muestra carta (uso setInterval() porque setTimeOut() solo ejecuta la función postergada una sola vez)

let puntosBanca = 0;

let intervalo = setInterval(() => {

    if (puntosBanca < 17) {
        console.log("La banca está sacando carta...");
        let carta = baraja.pop();
        puntosBanca += carta.valor;
        console.log(carta.valor);
        console.log(carta.imagen);

        // contador de puntos totales
        console.log(`La banca tiene ${puntosBanca} puntos`);

    } else if (puntosBanca > 21) {

        console.log(`La banca pierde porque tiene ${puntosBanca} puntos`);
        clearInterval(intervalo);
        console.log("JUEGO FINALIZADO");

    } else {

        console.log(`La banca se planta porque tiene ${puntosBanca} puntos.`);
        console.log(`Es el turno de ${nombreJugador}. Decide qué acción deseas realizar:`);
        clearInterval(intervalo);
    }
}, 2000);

let puntosJugador = 0;

function juegaUsuario() {
    // 3. juega el usuario (2 botones)
    // pedir carta y sumar puntos
        console.log(`El jugador ${nombreJugador} está sacando cartas...`);
        let carta = baraja.pop();
        puntosJugador += carta.valor;
        console.log(carta.valor);
        // console.log(carta.imagen);
        console.log(`El jugador tiene ${puntosJugador} puntos.`);
    
        if (puntosJugador > 21) {
            // si +22puntos pierde auto
            console.log(`${nombreJugador} pierde porque tiene ${puntosJugador} puntos.`);
            console.log("JUEGO FINALIZADO");
        }

}

// plantarse y mostrar ganador (quién más se acerque a 21p)
// si los dos tienen 21p hay EMPATE

function mostrarResultado() {

    if (puntosJugador > 21 || puntosJugador < puntosBanca) {
        console.log("¡Ha ganado LA BANCA!");
        console.log("JUEGO FINALIZADO");
    } else if (puntosJugador == puntosBanca) {
        console.log("¡EMPATE!");
        console.log("JUEGO FINALIZADO");
    } else {
        console.log(`¡Ha ganado ${nombreJugador}!`);
        console.log("JUEGO FINALIZADO");
    }
}





/* Los puntos de las cartas son los siguientes
AS: Valor de 1 (se obvia el doble valor de la carta)
2-10: Valor numérico
J, Q, K: Valor de 11 */

// se valora el uso de métodos y objetos */