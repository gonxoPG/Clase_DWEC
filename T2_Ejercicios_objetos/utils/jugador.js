/* - Crea una clase llamada jugador. dicha clase tendrá tendrá las siguientes características: 
nombre (de tipo string), 
posición (de tipo string), 
valor (de tipo int) */

class Jugador {
    
    nombre;
    posicion;
    valor;
    
    constructor(nombreParam, posicionParam, valorParam){
        this.nombre = nombreParam;
        this.posicion = posicionParam;
        this.valor = valorParam;
    }
    
}