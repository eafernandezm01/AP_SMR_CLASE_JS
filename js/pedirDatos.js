//const nombreComp = prompt ('Dime tu nombre y apellidos');
//console.log ("El nombre y apellido es:" + nombreComp);

const stringNum1 = prompt ("Introduce el num 1");
const stringNum2 = prompt ("Introduce el num 2");
const convNu1 = Number (stringNum1);
const convNu2 = Number (stringNum2);
// Lo de arriba y esto de abajo es iguual pero en más pasos
const num1 = Number(prompt ("Introduce el num 1"));
const num2 = Number(prompt ("Introduce el num 2"));

console.log (num1+"+"+num2+"="+ (num1+num2));
//console.log (`${num1} + ${num2} = ${num1+num2}`);
console.log (num1+"-"+num2+"="+ (num1-num2));
console.log (num1+"*"+num2+"="+ (num1*num2));
console.log (num1+"/"+num2+"="+ (num1/num2));

const d1 = "5";
const d2 = "5";
// como "d1 + d2 es" esta entre "" me muestra ese literal
console.log ("d1 + d2 es " + (d1+d2));


const nombre =prompt ("Dame tu nombre");
const apellidos = prompt ("Dame tu apellidos");
console.log ("Hola, "+ nombre+ " " + apellidos);

