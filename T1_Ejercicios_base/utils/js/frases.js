let confirmacion;

let frase;
let numeroPalabras;
let numeroLetras;
let fraseCortada;
let numeroFrases;

do {
    
    frase = prompt("Introduce una frase:")
    numeroPalabras = frase.split(" ").length;

    fraseCortada = frase.split(" ").join("");
    // alert(fraseCortada);
    numeroLetras = fraseCortada.length;
    // alert(numeroLetras);
    
    if (numeroLetras < 10) {
        alert("La frase tiene menos de 10 letras")
        confirmacion = confirm("¿Quieres volver a intentarlo?");
        
    }

} while (confirmacion);

alert(`El dato introducido tiene:
    - ${numeroLetras} letras
    - ${numeroPalabras} palabras
    - X frases`); // solo tendría una frase el prompt...