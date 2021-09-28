let producto = prompt("Ingrese el producto");
let tipoProducto = prompt("Ingrese el tipo de producto");
let cantidad = prompt("Ingrese la cantidad deseada");

class productos{
    constructor(producto, tipoProducto, cantidad) {
        this.nombre = producto;
        this.tipo = tipoProducto;
        this.cantidad = cantidad;
    }
    guardar(){
    console.log("El producto es: " + this.nombre); 
    console.log("El tipo es: " + this.tipo); 
    console.log("La cantidad es: " + this.cantidad);
    }
}
const producto1 = new productos(producto, tipoProducto, cantidad);
producto1.guardar();