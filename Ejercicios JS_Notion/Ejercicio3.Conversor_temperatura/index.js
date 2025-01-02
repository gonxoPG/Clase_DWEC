// Crear un conversor de temperaturas entre Celsius y Fahrenheit.

let tempCelsius = Number(prompt("Introduce una temperatura en Celsius:"));
let fahrenheit;
let celsius;

function conversorTemperatura(grados) {
    fahrenheit = grados * (9 / 5) + 32;

    return fahrenheit;
}

conversorTemperatura(tempCelsius);
console.log(`${tempCelsius}°C equivale a ${fahrenheit}°F.`);

let tempFaren = Number(prompt("Introduce ahora una temperatura en Fahrenheit:"));

function conversorInverso(faren) {
    celsius = (faren - 32) * (5 / 9);

    return celsius;
}

conversorInverso(tempFaren);
console.log(`${tempFaren}°F equivale a ${celsius.toFixed(2)}°C.`);