
const porcentaje = 0.05
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

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
console.log(Cheesecake);


let input1 = document.getElementById("precio")
let input2 = document.getElementById("amigos")
let botonCalcular = document.getElementById("calcular") 

let calculo;

botonCalcular.addEventListener("click", () => {
    calculo = dividir(input1.value, input2.value);
    console.log (calculo.toFixed(2));
}
)