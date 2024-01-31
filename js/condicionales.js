/*

// IF
let edad = Number(prompt("Dame tu edad"));
//edad > 17 es lo mismo que decir edad >=18
if (edad >= 18) {
    console.log("Puedes votar!!!!");
}
console.log("Tu edad es: ", edad); // "Tu edad es: " + edad


// IF-ELSE
edad = Number(prompt("Dame tu edad"));
//edad > 17 es lo mismo que decir edad >=18
if (edad >= 18) {
    console.log("Puedes votar!!!!");
} else {
    console.log("Debes esperar para votar :((((( ");
}

console.log("Tu edad es: ", edad); // "Tu edad es: " + edad



//SWITCH
const nota = parseInt(prompt("Nota del examen"));
switch (nota) {
    case 4: case 3: case 2: case 1: case 0:
        console.log("Tienes que hacer la recuperación");
        //HAY QUE PONER EL BREAK PARA QUE NO SIGA EJECUTANDO!!!
        break;
    //POR DEFECTO
    default:
        console.log("Te vas a hacer la FCT!!!!");
        break;
}

*/

/**
 * L/M/X/J/V/  S/D 
 */
const dia = prompt("Dame un día de la semana");
switch (dia) {
    case "S": case "D":
        console.log("Fin de semana, aprovecha!!")
        break;
    case "V":
        console.log("Viernes, casi llega el finde");
        break;
    case "J":
        console.log("Jueves, casi casi llega el finde");
        break;
    case "X":
        console.log("Miércoles, mitad de la semana");
        break;
    case "M":
        console.log("Martes, ooohhhh");
        break;
    case "L":
        console.log("Lunes, Nooooohhhh");
        break;
    default:
        console.log("Sólo admito la letras en mayúsculas L M X J V S D");
        break;
}

//OPERADOR TERNARIO
const nota2 = parseInt(prompt("Nota del examen"));
const literal = (nota2>=5) ? "HAS APROBADO": "HAS SUSPENDIDO";
console.log (literal);

//es igual que decir 
if (nota2>=5){
    literal ="HAS APROBADO";
}else{
    literal ="HAS SUSPENDIDO";
}













