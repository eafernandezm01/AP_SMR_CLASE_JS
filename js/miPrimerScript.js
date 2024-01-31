//alert("Script externo");

console.log ("Hola esto es un mensaje en consola");

// Definición y asignación del valor a una constante;
const MAYOR_EDAD = 18;

const miCoche ={
    matricula: '0000AAA',
    anyo: 2018,
    marca: 'Audi'
};

console.log ('El valor de mayor de edad es: ',MAYOR_EDAD);
console.log ("El valor de mayor de edad es: " + MAYOR_EDAD);

console.log ('Mi coche es: ',miCoche);
console.log ("Mi coche es: " + miCoche);

/**
 * CONSTANTES:  Los nombres que usamos es en MAYÚSCULA
 * VARIABLES: Minúsculas
 * SIN ESPACIOS
 */

// Esto es una variable, puedo cambiar su valor y se define con let
let variable;
console.log ("El valor de la variable", variable);
variable = "Javascript";
console.log ("El valor de la variable", variable);

// NUMBER
let entero = 2024;
let decimal = 9.5; //Siempre se define decimal con . NOOOO ,
let noEsUnNumero = NaN;


// STRING o Cadenas de caracteres
let asignatura = "Aplicaciones Web"; 
let asignatura2 = 'Aplicaciones Web 2';

let nombre = "Eva";
let apellido = "Fernández";
// DOS maneras de concatenar STRINGS.... 
let nombreCompleto = nombre + " "+ apellido;
let nombreCompletoBt = `${nombre} ${apellido}`; //Comilla que está al lado de la P 
console.log (nombreCompleto, nombreCompletoBt);

//BOOLEANOS solo admite true o false (Es como un interruptor)
let verdadero = true;
let falso = false;
//También podemos asignar el valor de una operacion al comparar.
let resultado = (1 == 1); //true
let num1 = 3;
let num2 = 4;
/**
 * realiza la operacion de              num1 + num2 = 7
 * después divide entre 2 =>             7/2 = 3.5
 * Luego compara ese resultado aplicando mayor igual que 5,     ¿3.5 >= 5? No
 * resultado2 = false
 */
let resultado2 = ((num1 + num2)/2 >= 5);








