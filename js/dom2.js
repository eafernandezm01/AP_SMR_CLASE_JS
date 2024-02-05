//Cuando se cargue la pestaña
window.addEventListener("load", inicial);

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
            let dentro18 = Number (edadUsuario.value) + 18;

            let anyio = "años";
            if (edadUsuario.value == 1){
                anyio = "año";   
            }

            actual.innerHTML = actual.innerHTML + "<br>" 
            + nombreUsuario.value + " tiene " + edadUsuario.value +" " + anyio + 
            " cuando pase 18 años";

            resultado.innerHTML = resultado.innerHTML + "<br>" 
            + nombreUsuario.value + " tendrá " + dentro18 +" años" + 
            " cuando pase 18 años";


        }
    }



}