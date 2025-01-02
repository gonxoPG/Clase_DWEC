// Crear un programa que genere números primos hasta un número dado.

let numero = Number(prompt("Introduce un número entero: "));

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

let listaPrimos = [];

for (let index = 0; index <= numero; index++) {
    
    if (esPrimo(index)) listaPrimos.push(index);
}

console.log(listaPrimos);
