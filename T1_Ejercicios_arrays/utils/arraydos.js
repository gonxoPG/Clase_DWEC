const array = [];

for (let index = 0; index < 20; index++) {
  array.push(Math.floor(Math.random() * 100));
}

/* // muestra por consola los pares
array.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

// muestra por consola todos los números
array.forEach((element) => {
  console.log(element);
}); */


/* // muestra el número máximo
let numMax = 0;
let numMin = 100;

array.forEach(element => {
    
    if (element > numMax) {
        numMax = element;
    }

    if (element < numMin) {
        numMin = element;
    }
});

console.log("El número máximo es: "+numMax);
console.log("El número mínimo es: "+numMin); */

let acumulable = 0;

for (let index = 0; index < array.length; index++) {
    
    acumulable += array[index];
}

console.log("La media de todos los números del array es: "+acumulable/array.length);
