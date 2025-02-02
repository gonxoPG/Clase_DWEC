let container = document.querySelector(".container.pb-5");

let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";

let preguntas = [];
let respuestas = [];
let respuestasCorrectas = [];
let puntuacion = 0;

async function consultaPreguntas() {
    let respuesta = await fetch(url);
    let respuestaJSON = await respuesta.json();

    respuestaJSON.results.forEach((element, index) => {

        //console.log(`Pregunta ${index+1}`);
        //console.log(element.question);
        preguntas.push(element.question);

        // guardo las respuestas correctas para comprobar después
        respuestasCorrectas.push(element.correct_answer);

        // creo un array de las respuestas incorrectas para sumar la correcta final
        let grupoRespuestas = _.shuffle([...element.incorrect_answers, element.correct_answer]);
                                // mezclo directamente, importado desde Underscore
                                        /* el operador de propagación [...] se usa para extraer los elementos del array, 
                                        descomponiéndolo en elementos individuales dentro del nuevo array */
        respuestas[index] = grupoRespuestas;

    });

    //console.log(respuestas);
    pintarPregunta();
}

function pintarPregunta() {

    container.innerHTML = "";

    //bucle que recorra las preguntas y por cada una pinte

    preguntas.forEach((pregunta, index) => {

        container.innerHTML += `
    <div class="card my-3" name="carta" data-index="${index}" style="width: 100%;">
            <div class="card-header">
              Pregunta ${index + 1}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${pregunta}</li>
              
            </ul>
          </div>
    `;
        // el atributo de datos DATA-INDEX se añade a cada tarjeta para poder recuperar el índice de la pregunta
    });

    // función para que detecte las preguntas seleccionadas y salte el Modal
    // función emplazada desde consultaPreguntas()
    agregarEventos();

}

function agregarEventos() {

    let preguntaSel = document.getElementsByName("carta");

    preguntaSel.forEach(pregunta => {
        pregunta.addEventListener("click", (e) => {

            let index = pregunta.getAttribute("data-index"); // recupera el índice de la pregunta para luego asociar respuestas
            let textoPregunta = pregunta.querySelector(".list-group-item").textContent;
            let respuestasOpciones = respuestas[index];

            document.getElementById("modalTitulo").textContent = `Pregunta ${parseInt(index) + 1}`;
            document.getElementById("modalPregunta").textContent = textoPregunta;

            let listaRespuestas = document.getElementById("modalRespuestas");
            listaRespuestas.innerHTML = "";

            respuestasOpciones.forEach(resp => {
                let li = document.createElement("li");
                li.className = "list-group-item list-group-item-action"; // el action es como un hover para que resalte la opción por donde pasa el ratón
                li.textContent = resp;

                li.addEventListener("click", () => seleccionarRespuesta(li, index)); // evento al hacer click en una respuesta: recoge contenido y comprobarRespuesta()

                listaRespuestas.appendChild(li);
            });

            // salta un diálogo que es una card con la pregunta y las opciones
            let modal = new bootstrap.Modal(document.getElementById("preguntaModal"));
            modal.show();

        })
    })
}

function seleccionarRespuesta(elemento, index) {

    // seleccionador / deseleccionador de respuesta (remarque azul)
    document.querySelectorAll("#modalRespuestas .list-group-item").forEach(item => {
        item.classList.remove("active");
    })

    elemento.classList.add("active");

    let respuestaSeleccionada = elemento.textContent;

    comprobarRespuesta(respuestaSeleccionada, index); // el index lo está cogiendo del data-index de agregarEventos()

    // automatización de la vuelta a la página principal una vez dada la respuesta
    let modal = bootstrap.Modal.getInstance(document.getElementById("preguntaModal"));
    modal.hide();
}


// crear función comprobarRespuesta() que contrastará la opción seleccionada con la correct_answer. Si es correcta puntuacion++

function comprobarRespuesta(resp, index) { // IMPORTANTE el index como enlace entre pregunta-respuestas

    let respCor = respuestasCorrectas[index];

    if (resp == respCor) {

        Swal.fire({
            title: "¡Correcto!",
            icon: "success",
            draggable: true
        });

        puntuacion++;
    } else {

        Swal.fire({
            title: "¡Incorrecto!",
            icon: "error",
            draggable: true
        });
    }

    document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;

}


consultaPreguntas();