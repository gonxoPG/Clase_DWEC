// Realiza una aplicación que simule la carga de los usuarios dentro del sistema

let contenedor = document.querySelector("body");
let btnCargar = document.querySelector("button");
/* let crearMensaje = document.createElement("p");
contenedor.appendChild(crearMensaje); */

fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {

        Swal.fire({
            position: "center",
            title: "Cargando datos...",
            showConfirmButton: false,
            timer: 2000
        });

        console.log("Se ha obtenido respuesta del servidor");

        // Simulación de un tiempo de espera
        return new Promise((resolve) => {
            setTimeout(() => resolve(response.json()), 2000);
        })

    })
    .then((archivoJSON) => {
        console.log("Respuesta traducida a JSON correctamente");

        /* crearMensaje.remove(); */

        archivoJSON.forEach(element => {
            let ciudad = element.address.city;
            console.log(`${element.name} | ${element.email} | ${ciudad}`); // esto por modificación del DOM

        });

    })
    .catch(() => {
        console.log("Error en la contestación");
        // console.error("Error en la contestación", error);

    })
    .finally(() => {
        console.log("Finalizando la promesa");

    })


    btnCargar.addEventListener("click", () => {
        
        // solo simula, no carga más en la lista
        setTimeout(() => {
            Swal.fire({
                position: "center",
                title: "Cargando más datos...",
                showConfirmButton: false,
                timer: 2000
            });
        }, 2000);
    })