// Crea un simulador de una tienda online que obtiene información sobre productos de una API pública y permite a los usuarios agregar productos al carrito.
let listaNombre = document.querySelector("#listaNombre");
let listaPrecio = document.querySelector("#listaPrecio");
let listaCategoria = document.querySelector("#listaCategoria");
let listaCarrito = document.querySelector("#listaCarrito");
let precioTotal = document.querySelector("#precioTotal");

let botonAgregar = document.querySelector("#botonAgregar");
let botonEliminar = document.querySelector("#botonEliminar");
let filtroCategoria = document.querySelector("#filtro");

let listaProductos;
let sumaPrecios = 0;

async function obtenerProductos(url) {
    try {
        let respuesta = await fetch(url);
        listaProductos = await respuesta.json();
        console.log("Éxito en la conexión");

        addElementoListas();
    } catch (error) {
        console.log("Error en la conexión", error);
    }
}

function addElementoListas() {

    listaProductos.forEach(producto => {

        let nuevoNombre = document.createElement("li");
        nuevoNombre.className = "list-group-item";
        nuevoNombre.textContent = producto.title;

        let nuevoPrecio = document.createElement("li");
        nuevoPrecio.className = "list-group-item";
        nuevoPrecio.textContent = `${producto.price} €`; //`${producto.price.toFixed(2) €}`

        let nuevaCategoria = document.createElement("li");;
        nuevaCategoria.className = "list-group-item";
        nuevaCategoria.textContent = producto.category;

        listaNombre.append(nuevoNombre);
        listaPrecio.append(nuevoPrecio);
        listaCategoria.append(nuevaCategoria);
    });
    sincronizarAlturas();


}


//Mostrar lista de productos en el DOM nada más se inicia el programa
obtenerProductos("https://fakestoreapi.com/products");

//selección productos lista
listaNombre.addEventListener("click", (e) => {

    if (e.target.classList.contains("list-group-item")) {

        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
        } else {
            e.target.classList.add("active");
        }

    }
})

//selección productos carrito
listaCarrito.addEventListener("click", (e) => {

    if (e.target.classList.contains("list-group-item")) {

        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
        } else {
            e.target.classList.add("active");
        }

    }
})

botonAgregar.addEventListener("click", () => {

    setTimeout(() => {
        let seleccionados = document.querySelectorAll(".list-group-item.active");

        seleccionados.forEach(item => {
            let nuevoProductoLista = document.createElement("li");
            nuevoProductoLista.className = "list-group-item d-flex justify-content-between align-items-center";
            nuevoProductoLista.textContent = item.textContent;

            let nuevoPrecioLista = document.createElement("span");
            nuevoPrecioLista.className = "badge text-bg-primary rounded-pill";

            item.classList.remove("active");


            listaProductos.forEach(producto => {

                if (item.textContent == producto.title) {
                    let precioProducto = Number(producto.price);

                    sumaPrecios += producto.price;
                    nuevoPrecioLista.textContent = `${precioProducto} €`;
                    nuevoProductoLista.setAttribute("data-price", precioProducto);
                }
            })

            nuevoProductoLista.append(nuevoPrecioLista);
            listaCarrito.append(nuevoProductoLista);
            //console.log(typeof sumaPrecios);
            //console.log(sumaPrecios);

            precioTotal.textContent = `${sumaPrecios.toFixed(2)} €`;
        })

        alert("¡Producto agregado correctamente!");

    }, 2000);

})

// eliminar productos del carrito
botonEliminar.addEventListener("click", () => {

    let seleccionados = document.querySelectorAll("#listaCarrito .list-group-item.active");

    if (seleccionados.length > 0) {

        seleccionados.forEach(item => {
            let precio = parseFloat(item.getAttribute("data-price"));
            sumaPrecios -= precio;
            item.remove();
        })

        precioTotal.textContent = `${sumaPrecios.toFixed(2)} €`;
    } else {
        alert("Selecciona una tarea para eliminarla");
    }
})

//filtrado de productos (coger del array listaProductos)
filtroCategoria.addEventListener("change", (e) => {
        
    let tipo = e.target.value;
    let listaFiltrada = [];
    let listaOrdenada = [];
    listaNombre.innerHTML = "";
    listaPrecio.innerHTML = "";
    listaCategoria.innerHTML = "";

    switch (tipo) {
        case "1":

            //filtro por precio mínimo
            listaOrdenada = [...listaProductos].sort((a, b) =>  a.price - b.price );

            listaOrdenada.forEach(producto => {
                let nuevoNombre = document.createElement("li");
                nuevoNombre.className = "list-group-item";
                nuevoNombre.textContent = producto.title;

                let nuevoPrecio = document.createElement("li");
                nuevoPrecio.className = "list-group-item";
                nuevoPrecio.textContent = `${producto.price} €`; //`${producto.price.toFixed(2) €}`

                let nuevaCategoria = document.createElement("li");;
                nuevaCategoria.className = "list-group-item";
                nuevaCategoria.textContent = producto.category;

                listaNombre.append(nuevoNombre);
                listaPrecio.append(nuevoPrecio);
                listaCategoria.append(nuevaCategoria);
            })
            sincronizarAlturas();
            break;
        case "2":
            //filtro por precio máximo
            listaOrdenada = [...listaProductos].sort((a, b) => b.price - a.price);

            listaOrdenada.forEach(producto => {
                let nuevoNombre = document.createElement("li");
                nuevoNombre.className = "list-group-item";
                nuevoNombre.textContent = producto.title;

                let nuevoPrecio = document.createElement("li");
                nuevoPrecio.className = "list-group-item";
                nuevoPrecio.textContent = `${producto.price} €`; //`${producto.price.toFixed(2) €}`

                let nuevaCategoria = document.createElement("li");;
                nuevaCategoria.className = "list-group-item";
                nuevaCategoria.textContent = producto.category;

                listaNombre.append(nuevoNombre);
                listaPrecio.append(nuevoPrecio);
                listaCategoria.append(nuevaCategoria);
            })
            sincronizarAlturas();
            break;

        case "3":
            //filtro por categoría
            let categoria = prompt("Introduce la categoría para filtrar");
            listaFiltrada = listaProductos.filter(producto => producto.category == categoria);

            listaFiltrada.forEach(producto => {
                let nuevoNombre = document.createElement("li");
                nuevoNombre.className = "list-group-item";
                nuevoNombre.textContent = producto.title;

                let nuevoPrecio = document.createElement("li");
                nuevoPrecio.className = "list-group-item";
                nuevoPrecio.textContent = `${producto.price} €`; //`${producto.price.toFixed(2) €}`

                let nuevaCategoria = document.createElement("li");;
                nuevaCategoria.className = "list-group-item";
                nuevaCategoria.textContent = producto.category;

                listaNombre.append(nuevoNombre);
                listaPrecio.append(nuevoPrecio);
                listaCategoria.append(nuevaCategoria);
            })
            sincronizarAlturas();
            break;
        default:
            addElementoListas();
            break;
    }
})

// AYUDA IA: función extra para ajustar el diseño

function sincronizarAlturas() {
    // Obtén las listas
    const nombres = document.querySelectorAll("#listaNombre .list-group-item");
    const precios = document.querySelectorAll("#listaPrecio .list-group-item");
    const categorias = document.querySelectorAll("#listaCategoria .list-group-item");

    // Asegúrate de que las listas tengan el mismo número de elementos
    const totalItems = Math.min(nombres.length, precios.length, categorias.length);

    for (let i = 0; i < totalItems; i++) {
        // Calcula la altura máxima entre los elementos correspondientes
        const maxAltura = Math.max(
            nombres[i].offsetHeight,
            precios[i].offsetHeight,
            categorias[i].offsetHeight
        );

        // Aplica la altura máxima a los elementos correspondientes
        nombres[i].style.height = `${maxAltura}px`;
        precios[i].style.height = `${maxAltura}px`;
        categorias[i].style.height = `${maxAltura}px`;
    }
}