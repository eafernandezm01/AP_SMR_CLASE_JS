//Cuando se cargue la pestaña
console.log ("HOLA");

window.addEventListener("load", inicial);
window.addEventListener("load", establecerFecha);
window.addEventListener("load", cambioGenero);

function cambioGenero(evento) {
    const genero = document.getElementById("genero");
    if (genero != null) {
        genero.addEventListener("change", actualizarImagen);
    }
}

function actualizarImagen(evento) {
    console.log("Elemento que ha lanzado el evento", evento);
    const seleccionado = evento.target.value;
    let nombreImagen="";
    switch (seleccionado) {
        case "F":
            nombreImagen = "img/mujer.png";
            break;
        case "M":
            nombreImagen = "img/hombre.png";
            break;
        case "O":
            nombreImagen = "img/otros.png";
            break;
        default:
            nombreImagen = "img/sin-imagen.png"
            break;
    }

    const imagenGenero = document.getElementById("imagenGenero");
    if (imagenGenero!=null){
        imagenGenero.src = nombreImagen;
    }
}


function establecerFecha(params) {

    //1 obtener el elemento html
    const parrafoFecha = document.getElementById("fecha");
    //2 comprobar que exista el elemento
    if (parrafoFecha != null) {
        //Ejecutar continuamente cada X tiempo
        setInterval(() => {
            let fechaActual = new Date();
            parrafoFecha.innerHTML = fechaActual.toLocaleString();
        }
            , 1000);  //1 segundo = 1000 ms
    }

}

function inicial(params) {
    //primiero recuperamos el boton
    const boton = document.getElementById("botonEjecuta");
    if (boton != null) {
        boton.addEventListener("click", recuperarDatos);
    }
}


function recuperarDatos(params) {
    const nombreUsuario = document.getElementById("nombre");
    const edadUsuario = document.getElementById("edad");

    //Solo debe entrar cuando los inputs existan
    if (nombreUsuario != null && edadUsuario != null) {
        //con .value obtenemos lo que ha introducido el usuario.
        if (nombreUsuario.value == "") {
            alert("Debes introducir tu nombre");
            return false;
        }
        if (edadUsuario.value == "") {
            alert("Debes introducir tu edad");
            return false;
        }

        let resultado = document.getElementById("resultado");
        let actual = document.getElementById("actual");
        if (resultado != null && actual != null) {
            let dentro18 = Number(edadUsuario.value) + 18;

            let anyio = "años";
            if (edadUsuario.value == 1) {
                anyio = "año";
            }

            actual.innerHTML = actual.innerHTML + "<br>"
                + nombreUsuario.value + " tiene " + edadUsuario.value + " " + anyio +
                " " + anyio;

            resultado.innerHTML = resultado.innerHTML + "<br>"
                + nombreUsuario.value + " tendrá " + dentro18 + " años" +
                " cuando pase 18 años";

        }
    }
}