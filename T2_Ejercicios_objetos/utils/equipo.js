/* - Crea una clase llamada equipo. dicha clase tendrá las siguientes propiedades: 
nombre (de tipo string), 
plantilla (de tipo array), 
presupuesto (tipo int) */

class Equipo {
    nombre;
    plantilla = [];
    presupuesto;

    constructor(nombreParam, presupuestoParam) {
        this.nombre = nombreParam;
        this.presupuesto = presupuestoParam;
        this.plantilla = [];
    }

    /* - Crea una función que se llame ficharJugador dentro de la clase equipo 
    y admita por un objeto de tipo jugador. 
    La función agregará el jugador a la propiedad plantilla del equipo */

    ficharJugador(jugadorParam) {
        this.plantilla.push(jugadorParam);
    }

    /* - Crea una funcion que se llame listarPlantilla dentro de la clase equipo, 
    el cual muestra los datos de todos sus jugadores. */

    listarPlantilla() {
        this.plantilla.forEach(jugador => {
            console.log(`Nombre: ${jugador.nombre}`);
            console.log(`Posición: ${jugador.posicion}`);
            console.log(`Valor: ${jugador.valor}`);
            console.log(""); // Espacio entre jugadores
        });
    }

    listarTresMasCaros() {
        this.plantilla.slice(0, 3).forEach(jugador => {
            console.log(`Nombre: ${jugador.nombre}`);
            console.log(`Posición: ${jugador.posicion}`);
            console.log(`Valor: ${jugador.valor}`);
            console.log(""); // Espacio entre jugadores
        });
    }
}

