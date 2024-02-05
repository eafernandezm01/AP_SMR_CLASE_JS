//Nos aseguramos con esto que la página se ha cargado completamente.
window.addEventListener("load", inicio);
window.addEventListener("load", anadirEventoBtn1);

function anadirEventoBtn1(event) {
    //Buscamos el botón btn1
    const boton1 = document.getElementById ("btn1");
    if (boton1 != null){
        boton1.addEventListener("click", saluda);
    }
}

function saluda (event){
    alert ("Holaaaaaaaa");
}

function inicio(event) {
    /* Acceder al parrafo1 ponemos su nombre */
    const parrafo1 = document.getElementById("parrafo1");
    console.log("parrafo1", parrafo1);
    if (parrafo1 != null) {
        // Con esto le cambio el texto del párrafo
        parrafo1.innerHTML = "HOLA MUNDO CRUEL <br> ES MUY TEMPRANO...";
        // Con esto le cambio el nombre de la clase css
        parrafo1.setAttribute("class", "rojo");
    }

    // Crear un nuevo elemento párrafo
    let nuevoElemento = document.createElement("p");
    // Asignar contenido al nuevo elemento
    nuevoElemento.innerHTML = "¡Párrafo creado por js!";
    nuevoElemento.setAttribute("class", "rojo");
    nuevoElemento.setAttribute("id", "p-hijo-js");

    // Busco donde lo quiero añadir
    const divPadre = document.getElementById("div-padre");
    if (divPadre != null) {
        //Añade el elemento nuevo.
        divPadre.appendChild(nuevoElemento);
    }
}
