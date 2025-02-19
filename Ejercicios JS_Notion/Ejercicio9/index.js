let divPregunta = document.querySelector("#div-pregunta");
let divTarjeta = document.querySelector("#div-tarjeta");

let arrayPreguntas;
let arrayRespuestas = [];


async function obtenerPreguntas() {
    
    try {
        let respuesta = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
        let json = await respuesta.json();
        
        console.log("Éxito en la conexión");
        
        json.results.forEach((element, index) => {
            let respuestas = _.shuffle([...element.incorrect_answers, element.correct_answer]);

            pregunta = new Pregunta(`${index+1}`, element.question, respuestas, element.correct_answer);
            arrayPreguntas.push(pregunta);
        });
        
        console.log(arrayPreguntas);
        
    } catch (error) {
        console.log("Error en la conexión", error);
    }

}

function pintarCard() {
        

    /* divTarjeta.innerHTML = `
        <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
    ` */

}
//llamada a la API
obtenerPreguntas();

/* setTimeout(() => {
    
    console.log(pregunta);
    
}, 1000); */
