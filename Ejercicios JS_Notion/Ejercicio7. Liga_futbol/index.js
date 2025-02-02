// Realiza una aplicación para poder mostrar todos los datos de clasificaciones de las ligas de fútbol.

let selectListaFutbol = document.querySelector("#listasFutbol");
let listaLigasCompleta;
let listaLigasNombre;


/* function agregarLista(param1) {
    let opcion = document.createElement("option");

    
} */

async function obtenerListaEquipos(url) {
    let lista = await fetch(url);
    let json = await lista.json();

    listaLigasCompleta = json.leagues;
    
    //listaLigasNombre es un array, entonces hay que recorrerlo para mostrar ligas individuales
    listaLigasCompleta.forEach((element, index) => {
        //console.log(`${element.strLeague}`);

        // creación de listado en el select

        let nuevaLiga = document.createElement("option");
        nuevaLiga.value = index+1;
        nuevaLiga.text = element.strLeague;
        selectListaFutbol.add(nuevaLiga);
        
    });
}

obtenerListaEquipos("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php");

// INCOMPLETO