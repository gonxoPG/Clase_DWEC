/* - En un archivo separado crea tres objetos llamados: barsa, madrid, atleti 
y dale parámetros iniciales. La plantilla de todos los equipos estará vacía. */

barsa = new Equipo("Barsa", 100000);
madrid = new Equipo("Madrid", 100000);
atleti = new Equipo("Atleti", 100000);
 
/* - Realiza 5 fichajes en cada uno de los equipos */
barsa.ficharJugador(new Jugador("Ronaldinho", "med", 500));
barsa.ficharJugador(new Jugador("Messi", "del", 800));
barsa.ficharJugador(new Jugador("Kaka", "med", 450));
barsa.ficharJugador(new Jugador("Neymar", "del", 300));
barsa.ficharJugador(new Jugador("Pujol", "def", 500));

madrid.ficharJugador(new Jugador("Cristiano", "del", 800));
madrid.ficharJugador(new Jugador("Ronaldo", "del", 600));
madrid.ficharJugador(new Jugador("Modric", "med", 500));
madrid.ficharJugador(new Jugador("Ramos", "def", 500));
madrid.ficharJugador(new Jugador("Casillas", "por", 450));

atleti.ficharJugador(new Jugador("Koke", "med", 500));
atleti.ficharJugador(new Jugador("Morata", "del", 300));
atleti.ficharJugador(new Jugador("Falcao", "del", 400));
atleti.ficharJugador(new Jugador("Oblak", "por", 800));
atleti.ficharJugador(new Jugador("Griezman", "del", 800));

/* - Muestra por consola los 3 jugadores más caros de cada uno de cada uno de los 
equipos. */

barsa.plantilla.sort((a, b) => b.valor -a.valor);

/* console.log("La plantilla del Barça ordenada es: ");
barsa.listarPlantilla(); */

madrid.plantilla.sort((a, b) => b.valor - a.valor);

/* console.log("La plantilla del Madrid ordenada es: ");
madrid.listarPlantilla(); */

atleti.plantilla.sort((a, b) => b.valor - a.valor);

/* console.log("La plantilla del Atleti ordenada es: ");
atleti.listarPlantilla(); */

console.log("Los tres jugadores más caros del Barça son: ");
barsa.    listarTresMasCaros();

console.log("Los tres jugadores más caros del Madrid son: ");
madrid.listarTresMasCaros();

console.log("Los tres jugadores más caros del Atleti son: ");
atleti.listarTresMasCaros();
