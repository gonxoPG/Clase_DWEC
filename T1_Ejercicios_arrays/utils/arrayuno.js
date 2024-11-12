const array = [1,2,3,4,5,6,7,8,9,10];
let contador = 0;

/* while (contador < array.length) {
    console.log(array[contador]);
    
    contador ++;
} */

/* for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    
} */

/* array.forEach(element => { console.log(element);}); */

/* array.forEach(element => {console.log(element+1);}); */

let acumulable = 0;

for (let index = 0; index < array.length; index++) {
    acumulable += array[index];  
    
}
console.log(acumulable / array.length);