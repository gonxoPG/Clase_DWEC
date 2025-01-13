
let inputTarea = document.querySelector("#inputTarea");
let inputDes = document.querySelector("#inputDes");
let inputFecha = document.querySelector("#inputFecha");
let inputSelect = document.querySelector("#select-prioridad");
let inputCheck = document.querySelector("#flexCheckDefault");
let btnAgregar = document.querySelector("#btn-agregar");
let inputFiltro = document.querySelector("#select-filtrado");
let listaDOM = document.querySelector(".list-group");
let divTarjetas = document.querySelector("#tarjetas");

let listaTareas = [];

// Botón Agregar crea la tarea y la añade a la lista y al DOM

btnAgregar.addEventListener("click", () => {
    let tarea = inputTarea.value;
    let descripcion = inputDes.value;
    let fecha = inputFecha.value;
    let prioritaria = false;
    if (inputCheck.checked) prioritaria = true;
    let prioridad = inputSelect.value;

    if (!tarea || !descripcion) {
        alert("Faltan campos por rellenar")
    } else {

        let nuevaTarea = new Tarea(tarea, descripcion, fecha, prioritaria, prioridad);
    
        listaTareas.push(nuevaTarea);
        agregarNodoListaTarea(nuevaTarea);
        representarTareas(nuevaTarea);
        clearInputs();
    }
})

// función para la representación de las tareas en el DOM
function representarTareas(nuevaTarea) {
    // divTarjetas.innerHTML = "";
    const index = listaTareas.indexOf(nuevaTarea);
    divTarjetas.innerHTML += `
    <div class="col" data-id="${index}">
            <div class="card">
                <img src="${nuevaTarea.imagen}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${nuevaTarea.titulo}</h5>
                        <p class="card-text">${nuevaTarea.descripcion}</p>
                        <a href="#" class="btn btn-primary btn-completar" data-id="${index}">Completar</a>
                        </div>
                    </div>
                </div>`;
    ;
}

function agregarNodoListaTarea(tarea) {
    let nodo = document.createElement("li");
    nodo.className = "list-group-item";
    nodo.innerText = tarea.titulo;

    listaDOM.append(nodo);
}

function clearInputs() {
    inputTarea.value = "";
    inputDes.value = "";
    inputFecha.value = "";
    inputSelect.selectedIndex = 0;
    inputCheck.checked = false;
}

// filtrado de las tareas, no modifica tarjetas
inputFiltro.addEventListener("change", (e) => {
    let tipo = inputFiltro.value;
    let listaFiltrada = [];
    listaDOM.innerHTML = "";

    if (!completada) {
        
        if (tipo != 0) {
            listaFiltrada = listaTareas.filter((item) => item.prioridad == tipo);
        } else {
            listaFiltrada = listaTareas;
        }
    
        listaFiltrada.forEach((item) => agregarNodoListaTarea(item))
        
    }

})


// btnCompletada (importar) cambiará completada = true;
divTarjetas.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-completar")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        
        listaTareas[id].completada = true;

        const tarjeta = event.target.closest(".col");
        tarjeta.classList.add("completada");

        console.log(`Tarea "${listaTareas[id].titulo}" marcada como completada.`);

        eliminarNodoListaTareas(listaTareas[id].titulo);
        representarTodasLasTareas()
    }
})

function representarTodasLasTareas() {
    divTarjetas.innerHTML = "";
    listaTareas.forEach(element => {
        if (!element.completada) {
            representarTareas(element)
        }
    });
}

function eliminarNodoListaTareas(tituloTarea) {
    const nodos = listaDOM.querySelectorAll(".list-group-item");

    nodos.forEach((item) => {
        if (item.innerText == tituloTarea) {
            item.remove();
        }
    })
}