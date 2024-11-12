let numeroUno = Number(prompt("Introduce un número:"));
let numeroDos = Number(prompt("Introduce otro número:"));

alert(
    "La suma es: "+sumar(numeroUno, numeroDos)+
    "\nLa resta es: "+restar(numeroUno,numeroDos)+
    "\nLa multiplicación es: "+multiplicar(numeroUno, numeroDos)+
    "\nLa división es: "+dividir(numeroUno,numeroDos)
)

function sumar(param1, param2 = 0) {
    return param1 + param2;
}

function restar(param1, param2 = 0) {
    return param1 - param2;
}

function multiplicar(param1, param2 = 0) {
    return param1 * param2;
}

function dividir(param1, param2 = 0) {
    return param1 / param2;
}

    //TODO un error de excepción