let nombreIngresado = prompt("Ingrese su nombre");
console.log(nombreIngresado);
let ingresado = "Hola" + " " + nombreIngresado + "!"
alert(ingresado);
let pedido = prompt("Que se te antoja?");

if(pedido == "letter cake") {
    alert("Buena eleccion, esta es una torta en forma de letra y puede tener un relleno de dulce de leche o mousse de chocolate");
} else if (pedido == "brownies") { 
    alert("Son deliciosos! Se pueden pedir mas humedos o mas secos, depende de tus gustos");
} else if (pedido == "cookies") {
    alert("Las cookies que hacemos son estupendas! pueden ser con confites, chocolates y muchas cosas mas!");
} else if (pedido == "lemonies") {
    alert("Para los fanaticos del gusto de limon tenemos los lemonies, gran eleccion!");
    console.log(pedido + "No se que poner aca jajajaj")
} else {
    alert("Lo siento no tenemos " +pedido+ ". Debrias revisar nuestro menu nuevamente o ten cuidado en no tener faltas de ortografia!.")
}
