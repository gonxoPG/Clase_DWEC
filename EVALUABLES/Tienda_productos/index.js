let espacioFiltros = document.querySelector("#espacio-filtros");
let filtro = document.querySelector("#filtro");
let btnFiltrar = document.querySelector("#btn-filtrar");

let divCartas = document.querySelector("#grupo-cartas");
let btnAddCarrito = document.querySelector("#btn-addcar");
let botonComprar = document.querySelector("#btn-comprar");

let listaCarrito = document.querySelector("#lista-carrito");
let precioUnitario = document.querySelector("#precio-unitario");
let precioTotal = document.querySelector("#precio-total");
let btnComprar = document.querySelector("#btn-comprar");

let listaProductos;
let sumaPrecios;
let carrito = [];
let acumulado = 0;

async function obtenerProductos(url) {
    try {
        let respuesta = await fetch(url);
        let json = await respuesta.json();
        listaProductos = _.shuffle(json.products);
        console.log("Éxito en la conexión");

        addElementoLista(listaProductos);

    } catch (error) {
        console.log("Error en la conexión", error);

    }
}

function addElementoLista(array) {

    //alternativa: coger las imagenes desde ./images/${productos.id}.jpg
    array.forEach((producto) => {

        divCartas.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${producto.images}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.price} €</p>
                        <button type="button" class="btn btn-primary" id="btn-addcar" data-id="${producto.id}">Añadir al carrito</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${producto.category}</small>
                    </div>
                </div>
            </div>
            `;
    });

    agregarEventosBotones();
}

btnFiltrar.addEventListener("click", () => {
    let filtroSelec = filtro.value;
    let listaFiltrada = [];

    divCartas.innerHTML = "";

    switch (filtroSelec) {
        case "1":

            //filtro por precio mínimo

            listaFiltrada = [...listaProductos].sort((a, b) => a.price - b.price);

            console.log("Pulsado filtrar");

            addElementoLista(listaFiltrada);

            break;

        case "2":

            let categorias = ["Beauty", "Fragances", "Furniture", "Groceries"];

            categorias.forEach(categoria => {
                listaFiltrada = listaProductos.filter((item) => item.category == categoria.toLowerCase());

                if (listaFiltrada.length) {
                    divCartas.innerHTML += `<h4 class="w-100 mt-5">${categoria}</h4>`;

                    addElementoLista(listaFiltrada);
                }
            })
            break;

        case "3":
            // filtrar por marca

            let quitarDuplicados = [...new Set(listaProductos.map(producto => producto.brand))];
            let listaMarcas = quitarDuplicados.filter(item => item != undefined);

            let marcasNumeradas = {};

            listaMarcas.forEach((marca, index) => {
                marcasNumeradas[marca] = index + 1;
            });

            let selectHTML = `<select class="form-select mb-2" style="max-width: 30rem;" id="select-marca">
                        <option value="0" selected>Elige una marca</option>`;

            listaMarcas.forEach((marca) => {
                selectHTML += `<option value="${marcasNumeradas[marca]}">${marca}</option>`;
            })

            selectHTML += `</select>`;

            espacioFiltros.innerHTML += selectHTML;

            //coge el value y pinta

            let selectMarca = espacioFiltros.querySelector("#select-marca");


            selectMarca.addEventListener("change", (e) => {
                //console.log(e.target.value);
                let tipo = e.target.value;

                if (tipo == "0") {
                    divCartas.innerHTML = "";
                }

                let marcaSeleccionada = "";

                for (const marca in marcasNumeradas) {
                    if (marcasNumeradas[marca] == tipo) {
                        marcaSeleccionada = marca;
                        break;
                    }
                }

                let productosFiltrados = listaProductos.filter(item => item.brand == marcaSeleccionada);

                divCartas.innerHTML = "";

                addElementoLista(productosFiltrados);
            });

            break;

        default:
            addElementoLista(listaProductos);
            break;
    }

})


function agregarEventosBotones() {
    let botonesAddCarrito = document.querySelectorAll("#btn-addcar");

    botonesAddCarrito.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            let productoID = event.target.getAttribute("data-id");
            let seleccionado = listaProductos.find(item => item.id == productoID);

            if (seleccionado) {
                carrito.push(seleccionado);
                actualizarCarrito();

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Producto añadido correctamente!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Ha ocurrido un problema",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    });
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        let nuevoLi = document.createElement("li");
        nuevoLi.className = "list-group-item d-flex justify-content-between align-items-center gap-2";


        nuevoLi.innerHTML = `
        
        ${producto.title}
            <span class="badge text-bg-primary rounded-pill ms-auto">${producto.price} €</span>
            <button class="btn btn-danger btn-sm btn-remove" data-index="${index}">X</button>
        `;

        listaCarrito.appendChild(nuevoLi);

        acumulado += producto.price;
    });

    precioTotal.textContent = `${acumulado.toFixed(2)} €`;

}

listaCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove")) {
        let index = e.target.getAttribute("data-index");
        carrito.splice(index, 1);
        actualizarCarrito();
    }
})

botonComprar.addEventListener("click", (e) => {
    
    Swal.fire({
        title: "¿Estás seguro?",
        html: `Vas a realizar una compra por valor de <b>${acumulado.toFixed(2)} €</b>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Comprar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Comprado!",
            text: "Has comprado los productos del carrito",
            icon: "success"
        });
        listaCarrito.innerHTML = "";
        precioTotal.textContent = 0;
        }
      });
})
obtenerProductos("https://dummyjson.com/products");