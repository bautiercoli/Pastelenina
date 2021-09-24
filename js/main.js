// en el desafio hice como que una cantidad de amigos van a comprar en el sitio, y tienen que poner cual es el precio final y cuantos son, para que luego les diga cuanto tiene que pagar cada uno.
const porcentaje = 0.05
let totalCompra = parseInt(prompt("Ingresar valor total de la compra de los productos"))
let cantidadAmigos = parseInt(prompt("Con cuantos amigos va a realizar la compra?"))
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

let precioFinal = dividir(multiplicar(totalCompra,porcentaje),restar(1,potencia(sumar(1,porcentaje),-cantidadAmigos)));

alert(`cada uno va a pagar ${precioFinal} pesos cada uno`);