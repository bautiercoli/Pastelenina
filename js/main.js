
const porcentaje = 0.05
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

class Pastelenina{
    constructor (id, Nombre, Precio, Cantidad){
        this.id = id;
        this.Nombre = Nombre;
        this.Precio = Precio;
        this.Cantidad = Cantidad;
    }
}
// array de objetos
let activoPastelenina1 = [];

activoPastelenina1.push (new Pastelenina (1, "Cheesecake", "Torta", 1200, 1));
activoPastelenina1.push (new Pastelenina (2, "Cookies", "Galletitas", 900, 1));
activoPastelenina1.push (new Pastelenina (3, "LetterCake", "Torta", 1400, 1));
activoPastelenina1.push (new Pastelenina (4, "Brownies", "Torta", 1000, 1));

function agregarCarrito(item) {

    const repeticion = element => element.id === item.id;
    
    if (carrito.some(repeticion)) {
        carrito.find(itemCarrito => itemCarrito.id === item.id).Cantidad++;
        localStorage.carrito = JSON.stringify(carrito)
        cards()
    }
    else {
        (carrito.push(item))
        carrito.find(itemCarrito => itemCarrito.id === item.id).Cantidad++;
    }
}
let buenas = "asdasdasdasdasd"

const anadir = document.getElementById("anadir");

