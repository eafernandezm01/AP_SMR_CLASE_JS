let variableGlobal = 100;
const constanteGlobal = "HOLA";

function funcion1() {
    variableGlobal = 9999;

    console.log ("Valor de variableGlobal " + variableGlobal);
    console.log ("Valor de constanteGlobal " + constanteGlobal);

    let variableLocal = 10;
    const constanteLocal = "Adios";

    console.log ("Valor de variableLocal " + variableLocal);
    console.log ("Valor de constanteLocal " + constanteLocal);

}

console.log ("Valor de variableGlobal desde fuera de la función: " + variableGlobal);
console.log ("Valor de constanteGlobal desde fuera de la función:" + constanteGlobal);


funcion1();

console.log ("Valor de variableGlobal desde fuera de la función: " + variableGlobal);
console.log ("Valor de constanteGlobal desde fuera de la función:" + constanteGlobal);

/* ESTO DA ERROR estamos intentando acceder a una variable y constante que está
definida dentro de una función */
//console.log ("Valor de variableLocal desde fuera de la funcion: " + variableLocal);
//console.log ("Valor de constanteLocal desde fuera de la funcion:" + constanteLocal);
