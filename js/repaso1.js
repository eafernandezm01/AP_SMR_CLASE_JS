console.log("HOLA");

//VARIABLES GLOBALES: una para sumar las notas y otra para saber el numero de notas
let sumaNotas = 0;
let totalNotas = 0;


//Espera a que cargue la ventana
window.addEventListener("load", setClickEnviar);

// Esto se ejecuta cuando se cargue la ventana
function setClickEnviar(params) {

    let boton = document.getElementById("enviarBtn");
    console.log('setClickEnviar', boton);
    boton.addEventListener("click", enviarDatos);
}

//Esto se ejecuta cuando haga click en el botón enviar.
function enviarDatos(params) {
    console.log('EnviarDatos');
    // Recuperamos los elementos del formulario que tengan el id con el nombre puesto
    let eAsig =document.getElementById("asignatura")
    let eNota =document.getElementById("nota");
    let eCiclo =document.getElementById("ciclo");

    console.log (eAsig, eNota, eCiclo);

    //Vamos a recuperar el valor de cada caja de texto
    let valueAsig = eAsig.value;
    let valueNota = eNota.value;
    let valueCiclo = eCiclo.value;
    console.log (valueAsig, valueNota, valueCiclo);
    // Con que uno de ellos no haya sido introducido le mostramos el mensaje
    // y le damos la patada con el return
    if(valueAsig == "" || valueNota == "" || valueCiclo ==""){
        alert ("Debes introducir todos los datos");
        return false; 
    }
    // Transfromarmos el valueNota en numero
    let numNota = Number(valueNota);
    // Si no es un numero avisamos al usuario y le damos la patada..
    if(isNaN(numNota) == true){ //   esto es equivalente if(isNaN(numNota))
        alert ("La nota tiene que ser numérica");
        return false;
    } 

    calcularMedia (numNota);
}


function calcularMedia(pNumNota) {
    sumaNotas = sumaNotas + pNumNota;
    totalNotas = totalNotas + 1;
    let media = sumaNotas/totalNotas;

    
}