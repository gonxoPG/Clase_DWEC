// Crea una app que simule el funcionamiento de la red social x mediante la publicación de tweets en el timeline. 

let inputTweet = document.querySelector("#tweet");
let inputCategoria = document.getElementsByName("categoria");
let btnPublicar = document.querySelector("#publicar");
let lista = document.querySelector("#timeline");
let parrContador = document.querySelector("#contador");
let select = document.querySelector("#select-tipo");

btnPublicar.addEventListener("click", (event) => {
    let tweet = inputTweet.value;
    let categoria = null;

    if (tweet.length == 0) {

        /* Utilizar SweetAlert */
        Swal.fire({
            title: "Fallo",
            text: "No hay Tweet para añadir.",
            icon: "error"
        });

    } else {

        inputCategoria.forEach((radio) => {
            if (radio.checked) {
                categoria = radio.value;
            }
        })

        // para añadir HTML arriba podríamos usar lista.insertAdjacentHTML("afterbegin", `<li class="list-group-item">${tweet}</li>`);

        let nuevoTweet = document.createElement("li");
        nuevoTweet.className = "list-group-item";
        nuevoTweet.textContent = tweet;
        nuevoTweet.setAttribute("data-categoria", categoria);

        lista.prepend(nuevoTweet);
        inputTweet.value = "";

        console.log(`Tweet publicado: "${tweet}" en la categoría: ${categoria}`);

    }
})

inputTweet.addEventListener("input", (e) => { // KEYPRESS está deprecado y no debería usarse (KEYDOWN, KEYUP)

    let maxChars = 50;

    if (inputTweet.value.length > maxChars) {
        inputTweet.value = inputTweet.value.slice(0, maxChars);
    }

    const caracteresRestantes = maxChars - inputTweet.value.length;
    // console.log(caracteresRestantes);
    parrContador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
})

// Filtro busca por categoría
select.addEventListener("change", (event) => {

    let tipo = select.value;
    let tweetsPublicados = lista.querySelectorAll(".list-group-item");

    tweetsPublicados.forEach((item) => {

        if (tipo == "todos" || item.getAttribute("data-categoria") == tipo) {
            item.style.display = "";

        } else {
            item.style.display = "none";
        }
    })

})