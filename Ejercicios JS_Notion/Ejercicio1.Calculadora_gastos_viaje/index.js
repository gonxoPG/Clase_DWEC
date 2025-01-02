// Crear una calculadora que sume los gastos de alojamiento, alimentación y entretenimiento.

let gastosAlojamiento = Number(prompt("Introduce los gastos de alojamiento:"));
let gastosAlimentacion = Number(prompt("Introduce los gastos de alimentación:"));
let gastosEntretenimiento = Number(prompt("Introduce los gastos de entretenimiento:"));

let totalGastos = () => gastosAlojamiento + gastosAlimentacion + gastosEntretenimiento;

let cuerpo = document.querySelector("body");

cuerpo.innerHTML += `Los gastos totales de tu viaje són <b>${totalGastos()}€</b>`;