let numeroUno;
let numeroDos;
let confirmacion;

let suma;
let resta;
let multi;
let divi;

do {

    numeroUno = Number(prompt("Escribe el primer número"));
    numeroDos = Number(prompt("Escribe el segundo número"));

    if (numeroUno < 0 || numeroDos < 0) {

        alert("Error en el dato introducido. El número es menor que 0");
    
    }else if(isNaN(numeroUno) || isNaN(numeroDos)){
    
        alert("Error en el dato introducido. El valor no es un número");
    
    }else{
    
        suma = numeroUno+numeroDos;
        resta = numeroUno-numeroDos;
        multi = numeroUno*numeroDos;
        divi = numeroUno/numeroDos;

        if (suma < 0 || resta < 0 || multi < 0 || divi < 0) {
            alert("El resultado es negativo y el programa se detendrá");
            break;
        }

        alert(
        
            `${numeroUno} + ${numeroDos} = ${suma}
            ${numeroUno} - ${numeroDos} = ${resta}
            ${numeroUno} * ${numeroDos} = ${multi}
            ${numeroUno} / ${numeroDos} = ${divi}`
        
        )
    }

    confirmacion = confirm("¿Quieres continuar realizando operaciones?");

} while (confirmacion);

alert("Programa finalizado");


