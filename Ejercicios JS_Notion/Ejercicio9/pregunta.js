class Pregunta {

    titulo;
    pregunta;
    respuestas = [];
    respuestaCorrecta;

    constructor(titulo, pregunta, respuestas, respuestaCorrecta) {
        this.titulo = titulo;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}