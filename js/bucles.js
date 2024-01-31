/*
const tabla = parseInt (prompt ("Dame un número"));
console.log ("La tabla del " + tabla);
//let i = 0; i <= 10; i++
for (let i = 0; i < 11; i++) {
   console.log (tabla + "*" + i + "="+ (tabla*i));
}


//CUENTA ATRÁS
for (let i = 10; i >= 0; i--) {
    console.log (i); 
}
console.log ("Lanzado la nave!!!!");


const valorInicial = parseInt (prompt("Dame un número"));
for (let i = valorInicial; i >= 0; i--) {
    console.log (i);  
}
console.log ("Fin de la cuenta atrás " + valorInicial);
*/

//WHILE Mientra que se cumpla la condición ejecuta {}
let contador = 0;
while (contador <= 10) {
    console.log ("Valor del contador", contador);
    // OJOOOO tenemos que hacer algo para que llegue a 
    // cumplirse la condición!!
    contador++; //contador = contador + 1;
}


let cont = 1;
do{
 console.log ("Con do-while, valor del cont: " + cont);
 cont++; //Cuidado si no lo pongo creo un bucle infinito.
}while (cont <= 3);


