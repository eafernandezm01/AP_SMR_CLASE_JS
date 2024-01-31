let a=5;
let b=a++; //POST INCREMENTO: Primero asigna y luego suma 1 al valor de a
console.log ("Valor de a", a, "Valor de b", b); //b=5 y a=6

let c = 8;
let d = c--; //POST DECREMENTO: Primero asigna y luego resta 1 al valor de c
console.log ("Valor de c", c, "Valor de d", d); //d=8 y c=7

let e=9;
let f= ++e; //PRE INCREMENTO: Primero cambia el valor de e (sumando 1) y luego asigna a f
console.log ("Valor de e", e, "valor de f", f); //f=10 y e=10

let g=4;
let h= --g; //PRE DECREMENTO: Primero cambia el valor de g (restando 1) y luego se lo asigna a h
console.log ("Valor de g", g, "Valor de h", h); //h=3 g=3


let i=100;
let j=-i; //Pone negativo un número sería igual que hacer -100
console.log ("Valor de i", i, "Valor de j", j); //j=-100 e i=100


let k=72;
console.log ("El resto de dividir: " + k +" entre 2 es: " + (k%2) + " y el cociente es: " + (k/2));

let base = 2;
let exponente = 3;
console.log (base +" elevada a "+ exponente + " es " + (base**exponente));


let exp = Number(prompt("Dame un número"));
console.log ("2^"+ exp +"="+ (2**exp));
--exp; //exp = exp - 1;
console.log ("2^"+ exp +"="+ (2**exp));
--exp; //exp = exp - 1;
console.log ("2^"+ exp +"="+ (2**exp));
