let totalCompra = parseInt(prompt("Ingresar valor total de la compra de los productos"))
let cantidadAmigos = parseInt(prompt("Con cuantos amigos va a realizar la compra?"))
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

let precioFinal = dividir(multiplicar(totalCompra,porcentaje),restar(1,potencia(sumar(1,porcentaje),-cantidadAmigos)));

alert(`cada uno va a pagar ${Math.floor(precioFinal)} pesos cada uno`);

class Pastelenina{
constructor (Nombre, Precio, Cantidad){
this.Nombre = Nombre;
this.Precio = Precio;
this.Cantidad = Cantidad;
    }
}

let activoPastelenina1 = [];

activoPastelenina1.push (new Pastelenina ("Cheesecake", "Torta", 1200, 1));
activoPastelenina1.push (new Pastelenina ("Cookies", "Galletitas", 900, 1));
activoPastelenina1.push (new Pastelenina ("LetterCake", "Torta", 1400, 1));
activoPastelenina1.push (new Pastelenina ("Brownies", "Torta", 1000, 1));

const Cheesecake = activoPastelenina1.slice(1, 2);
console.log(activoPastelenina1);