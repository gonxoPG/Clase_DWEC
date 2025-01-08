// Crear una lista de tareas donde el usuario pueda agregar y eliminar tareas.

let botonAnadir = document.querySelector("#btn-add");
let botonEliminar = document.querySelector("#btn-del");
let inputTarea = document.querySelector("#in-task");
let lista = document.querySelector("#listado");


botonAnadir.addEventListener("click", (event) => {
    let tarea = inputTarea.value;

    if (tarea.length == 0) {
        alert("No hay ninguna tarea para añadir.")
    } else {
        
        lista.innerHTML += `<li class="list-group-item">${tarea}</li>`;
        inputTarea.value = "";
    }
})

// método seleción
lista.addEventListener("click", (event) => {

    if (event.target.classList.contains("list-group-item")) {
        let elementos = document.querySelectorAll("#listado .list-group-item.active");
        elementos.forEach((elemento) => elemento.classList.remove("active"));
    }
        
    event.target.classList.add("active");

    
})


// método eliminar
botonEliminar.addEventListener("click", () => {
    // seleccionar tarea de la lista
    let selec = document.querySelector("#listado .list-group-item.active");

    // botonEliminar borra esa selección
    if (selec) {
        selec.remove();
    } else {
        alert("Selecciona una tarea para eliminarla");
    }
})