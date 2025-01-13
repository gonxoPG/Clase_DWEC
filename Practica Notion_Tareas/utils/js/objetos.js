class Tarea {
    static contador = 1;
    id;
    titulo;
    descripcion;
    fecha;
    prioritaria;
    prioridad;
    completa;
    imagen;

    constructor(titulo, descripcion, fecha, prioritaria, prioridad) {
        this.id = String(Tarea.contador).padStart(2, "0");
        Tarea.contador++;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.prioritaria = prioritaria;
        this.prioridad = prioridad;
        this.completa = false;
        this.imagen = `./imgs/${prioridad}.png`;
    }

    mostrarDetalles() {
        console.log("Id:", this.id);
        console.log("Título:", this.titulo);
        console.log("Descripción:", this.descripcion);
        console.log("Fecha:", this.fecha);
        console.log("Prioritaria:", this.prioritaria);
        console.log("Prioridad:", this.prioridad);
        console.log("Completa:", this.completa);
        console.log("Imagen:", this.imagen);
    }

}