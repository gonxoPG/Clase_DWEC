let productos = [
    new producto("Camiseta", 100, "ropa"),
    new producto("Pantalon", 200, "ropa"),
    new producto("Movil", 100, "tecnologia"),
    new producto("Tablet", 100, "tecnologia"),
    new producto("Bebida", 100, "alimentos"),
    new producto("Comida", 100, "alimentos"),
    new producto("Botella", 100, "cocina"),
];

let select = document.querySelector("#select-tipo");
let divProductos = document.querySelector("#div-productos");
let botonAnadir = document.querySelector("#boton-anadir");

representarProductos(productos); // nada más arrancar queremos que aparezcan todos los productos

select.addEventListener("change", (e) => {
    /* console.log(select.value);
        // también podría sacarlo con un (e.target.value) */

    let tipo = select.value;
    let listaFiltrada = [];

    if (tipo != "todos") {
        listaFiltrada = productos.filter((item) => { //Simplificado: productos.filter((item) => item.categoria == tipo);
            return item.categoria == tipo;
        });
    } else {
        // como se representan todos los productos, cogemos el array original directamente
        listaFiltrada = productos;
    }

    saltarDialogo(listaFiltrada.length); // alerta con SweetAlert2 para darle estilo al filtrado
    representarProductos(listaFiltrada);
    
    // Comprobación del código por consola
    console.log("El resultado del filtro es:");
    console.log(listaFiltrada);


})

// Esta función añade con .append (no genera contenido, solo modificación HTML)
botonAnadir.addEventListener("click", (e) => {

    let nodo = document.createElement("p");

    nodo.className = "animate__animated animate__bounce";
    nodo.textContent = "Ejemplo de nodo añadido con append";
    divProductos.append(nodo);
});

// Esta función añade con .innerHTML +=
function representarProductos(productos) {
    divProductos.innerHTML = "";

    productos.forEach((item) => {
        // hago un filtrado para que me presente la imagen que me interesa según categoría
        let imagen = "";
            switch (item.categoria) {
            case "ropa":
                imagen =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3R4Os2OPTRBjMlPQUeLu5BUE6h6bvQi7TTg&s";
                break;
            case "alimentos":
                imagen =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAImh5S75ab5kdj2GmHUnMTOXZ5vMYXXi3ww&s";

                break;
            case "tecnologia":
                imagen =
                "https://neosystems.es/wp-content/uploads/2021/03/foto-tecno.jpeg";

                break;
            default:
                imagen =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmuxgLNTRF42x-SjOnu8msU6-DQ-GBcehOA&s";
                break;
    }

        // construyo la carta

        divProductos.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.precio}</p>
      </div>
    </div>
  </div>
    `;

    });
}

function saltarDialogo(numero) {

    let icono = "success";

    if (numero == 0) {
        icono = "warning";
    }

    Swal.fire({
        title: "Productos",
        text: `La candidad de productos encontrada es de ${numero}`,
        icon: icono,
      });
}