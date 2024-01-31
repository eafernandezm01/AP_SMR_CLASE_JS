/**Crea una función llamada celsiusToFahrenheit 
 * que convierta una temperatura 
 * dada en grados Celsius a Fahrenheit. 
 * La fórmula es: F = (C * 9/5) + 32. */

 function celsiusToFahrenheit(celsius) {
    return ((celsius * 9/5) + 32);    
 }

function pedirGrados() {
   let celsius = Number (prompt ("Introduce una temperatura en º Celsius"));
   if (!isNaN(celsius)){//if (isNaN (celsius) == false)
      return celsius;
   } 
}

const grados = pedirGrados();
console.log (grados);

//Undefined es cuando me han introducido un caracter.
if (grados != undefined){
   console.log (grados + " ºC son = " + celsiusToFahrenheit(grados));
}else{
   console.log ("No has introducido un número");
}



let dato;
console.log (dato);