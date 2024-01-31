/*
Crea una función llamada calcularDescuento que tome un total 
y un porcentaje de descuento como parámetros. 
Devuelve el monto con el descuento aplicado.
*/

//100, 10
function calcularDescuento(total, descuento) {
    return (total - (total * (descuento/100)));
}

//100, 10
function calcularDescuento2(total, descuento) {
    console.log (total - (total * (descuento/100)));
}

console.log (calcularDescuento (1000, 7));

calcularDescuento2 (1000, 7);