// accedo a cada Nodo
let btnAnalizar = document.querySelector("#btnAnalizar");
let btnAnadir = document.querySelector("#btnAnadir");
let btnInput = document.querySelector("#inputNombre");
let contador = 0;
let pContador = document.querySelector("#contador");

    //modificaciones del boton
        /* btnAnalizar.textContent = "Otronombre";
        btnAnalizar.className = "nuevaClase"; */

btnAnalizar.addEventListener("click", (event) => {
    // Lo que quiero que pase cuando el botón se pulsa

    let nodos = document.querySelectorAll("li");

    nodos.forEach((element) => {
        element.className = "list-group-item active"; // cambiamos su estilo
        console.log(element.textContent); // extraemos el valor de cada nodo
    })
})

btnAnadir.addEventListener("click", (event) => {

    let nombre = btnInput.value;
    // Controlo si el input está vacío

    if (nombre.length == 0) {

        alert("Introduce algún nombre"); // con SweetAlert le doy diseño

    } else {
        
        let lista = document.querySelector("ul");
    
        lista.innerHTML += `<li class='list-group-item'>Nombre: ${nombre}</li>`;
            // comilla simple porque ya estamos dentro de la doble
            
        //limpiamos el campo de texto
        btnInput.value = "";
        contador++;
        pContador.textContent = contador;
    }


})