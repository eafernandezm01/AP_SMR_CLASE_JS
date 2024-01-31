/* Cálculo del Área del Rectángulo: Define una función llamada 
calcularAreaRectangulo que tome dos parámetros (ancho y altura) 
y devuelva el área del rectángulo. Llama varias veces a la función 
con distintos datos..
*/
function calcularAreaRectangulo(ancho, alto) {
    return (ancho * alto);
}

function probarFunciones() {
    let alto = Number(prompt("Dame el alto"));
    let ancho = Number(prompt("Dame el ancho"));
    //isNaN devuelve true si no ha podido convertir a número
    
    if (isNaN (alto) == false && isNaN (ancho) == false){
        console.log("El área es " + calcularAreaRectangulo(alto, ancho));
    }else{
        console.log ("Debes introducir números");
    }
    
    if (!isNaN(alto) && !isNaN (ancho)){
        console.log("El área es " + calcularAreaRectangulo(alto, ancho));
    }else{
        console.log ("Debes introducir números");
    }

    if (isNaN (alto) || isNaN (ancho)){
        console.log ("Debes introducir números");
    }else{
        console.log("El área es " + calcularAreaRectangulo(alto, ancho));
    }
}

//Ejecuta
//probarFunciones ();


/** Pedir números al usuario hasta que introduzca una letra */
let numero;
do{
    numero = Number(prompt("numero"));  
    console.log ("Has introducido: ", numero);
}while (isNaN (numero) == false); // es lo mismo !isNaN (numero)
