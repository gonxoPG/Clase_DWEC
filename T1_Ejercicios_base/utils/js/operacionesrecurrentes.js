let numeroUno = Number(prompt("Introduce un número:"));
let numeroDos = Number(prompt("Introduce otro número:"));

let confirmacion = confirm("¿Quieres realizar las operaciones?");

 // un espacio de 2 segundos entre cada una
if (confirmacion) {
    alert(
        "La suma es: "+sumar(numeroUno, numeroDos)+
        "\nLa resta es: "+restar(numeroUno,numeroDos)+
        "\nLa multiplicación es: "+multiplicar(numeroUno, numeroDos)+
        "\nLa división es: "+dividir(numeroUno,numeroDos)
    )
}else{
    alert("No se han realizado las operaciones.")
}



function sumar(param1, param2) {
    return param1 + param2;
}

function restar(param1, param2) {
    return param1 - param2;
}

function multiplicar(param1, param2) {
    return param1 * param2;
}

function dividir(param1, param2) {
    return param1 / param2;
}