let inputNombre = document.querySelector("#nombreInput");
let inputMail = document.querySelector("#emailInput");
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#generoSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("div.row.g-4");

btnGuardar.addEventListener("click", (e) => { // a través de "e" puedo sacar todos los elementos que tienen lugar cuando se pulsa el botón
    //sacar la info del formulario
    let nombre = inputNombre.value;
    let mail = inputMail.value;
    let pass = inputPass.value;
    let genero = inputGenero.value;

    /* console.log(`${nombre} ${mail} ${pass} ${genero}`); */
    /* console.log(checkGuardar.checked); devuelve true o false*/

    if (checkGuardar.checked) {

        // compruebo que haya datos en los input
        if (nombre.length > 0 && mail.length > 0 && pass.length > 0 && genero.length > 0) {
            // guardar datos adornado con la librería SweetAlert2
            Swal.fire({
                title: "¡Éxito!",
                text: "Usuario guardado correctamente!",
                icon: "success",
            });

            //agregar un usuario a la lista (*) con innerHTML += o con .append
            agregarNodo(nombre, mail, genero);


        } else {
            Swal.fire({
                title: "Error",
                text: "Datos incompletos",
                icon: "error",
            });
        }
    }
});

inputPass.addEventListener("keyup", (e) => { //
    // saber cuántos caracteres hay en el input
    console.log(e.target.value.length);
})

function agregarNodo(nombre, email, genero) {
     // voy creando a mano cada nodo

     let columna = document.createElement("div"); 
     columna.className = "col"; // <div class="col"></div>

     let carta = document.createElement("div");
     carta.className = "card animate__animated animate__fadeInDown"; // <div class=".asdasdasdas"></div>

     let imagen = document.createElement("img");
     imagen.classList = "card-img-top";
        if (genero == 1) {
            imagen.src = "https://cdn-icons-png.flaticon.com/512/3233/3233483.png";
        } else {
            imagen.src = "https://cdn-icons-png.flaticon.com/512/3577/3577099.png";
        }
    
    let bodyCard = document.createElement("div");
    bodyCard.className = "card-bdoy";

    let titulo = document.createElement("h5");
    titulo.innerText = nombre;

    // creo la carta en orden retrógrado
    bodyCard.append(titulo);
    carta.append(imagen);
    carta.append(bodyCard);
    columna.append(carta);
    divResultados.append(columna);
}

function clearInputs() {
    inputNombre.value = "";
    inputMail.value = "";
    inputPass.value = "";
    inputGenero.value = "Masculino";
}

// (*)
/* divResultados.innerHTML += `<div class="col ">
        <div class="card animate__animated animate__fadeInDown">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">
              ${mail}
            </p>
          </div>
        </div>
      </div>`; */