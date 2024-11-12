const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Ordena el array
ages.sort((a, b) => a - b);

console.log(ages);

// el valor máximo

let maxAge = Math.max(...ages);

console.log("La edad más alta es: "+maxAge);


// el valor mínimo

let minAge = Math.min(...ages);

console.log("La edad más baja es: "+minAge);


// media de edad

let sumaEdades = 0;

ages.forEach(element => {
    sumaEdades += element;

});

console.log("La media de edad es de", sumaEdades / ages.length, "años.");
