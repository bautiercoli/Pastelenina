const porcentaje = 0.05
//let totalCompra = parseInt(prompt("Ingresar valor total de la compra de los productos"))
//let cantidadAmigos = parseInt(prompt("Con cuantos amigos va a realizar la compra?"))
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;

//let precioFinal = dividir(multiplicar(totalCompra,porcentaje),restar(1,potencia(sumar(1,porcentaje),-cantidadAmigos)));

//alert(`cada uno va a pagar ${Math.floor(precioFinal)} pesos cada uno`);
const productos = [
    {
    id: 1,
    nombre: 'Letter o number cake',
    descripcion:'Esta torta puede ser pedida con forma de numeros o letra y esta hecha a base de brownie y el relleno es a eleccion(ganagge de chocolate, dulce de leche, mousse de chocolate negro o mousse de chocolate blanco)', 
    imagen: '../imagenes/lettter cake.jpg',
    precio: '2300-$1800',
    cantidad: 0,
    otros: false,
    },
    {
    id: 2,
    nombre: 'Macarons',
    descripcion:'Este producto se basa en una caja que contiene 10 macarons los cuales pueden ser de:chocolate, frutos rojos, menta, lima, chocolate blanco.', 
    imagen: '../imagenes/macarons.jpg',
    precio: '1100',
    cantidad: 0,
    otros: false,
    },
    {
    id: 3,
    nombre: 'Cheesecakes',
    descripcion:'Estas son unas minitortas las cuales pueden ser: chocotortas, frutos rojos, lemon pie, etc.', 
    imagen: '../imagenes/mini cakes.jpg',
    precio: '1200',
    cantidad: 0,
    otros: false,
    },
    {
    id: 4,
    nombre: 'Lemonies',
    descripcion:'Los lemonies son unas deliciosas porciones hechas a base de limon, aparte tienen un glase de limon que hace que el biscocho tenga un sabor increible!', 
    imagen: '../imagenes/Lemonies.png',
    precio: '1700 - 1300',
    cantidad: 0,
    otros: true
    },
    {
    id: 5,
    nombre: 'Alfajores de nuez',
    descripcion:'Estos alfajores son hechos a base de nuez mariposa y pecan y tienen como relleno dulce de leche', 
    imagen: '../imagenes/alfajores de nuez.png',
    precio: '1200 - 1400',
    cantidad: 0,
    otros: true
    },
    {
    id: 6,
    nombre: 'Brownies con dulce de leche y merengue',
    descripcion:'Estos deliciosos brownies hechos a base de cacao tienen por encima un delicioso dulce de leche y merengue', 
    imagen: '../imagenes/brownie.png',
    precio: '1700 - 1300',
    cantidad: 0,
    otros: true
    },
    {
    id: 7,
    nombre: 'Cookies',
    descripcion:'Estas son cookies las cuales estan cubiertas por pedazos de chocolate blanco. oreo, pedazos de chocolate amargo y finalmente con un toque de gannage de chocolate', 
    imagen: '../imagenes/cookies.png',
    precio: '1000',
    cantidad: 0,
    otros: true
    },    {
    id: 8,
    nombre: 'mini-cakes',
    descripcion:'Estas cheesecakes estan hechas de distintos sabores como: arandanos y frutos rojos o dulce de leche y chocolate entre muchas otras mas!', 
    imagen: '../imagenes/cheesecakes.png',
    precio: '500',
    cantidad: 0,
    otros: true
    },    {
    id: 9,
    nombre: 'Torta Rogel',
    descripcion:'Esta deliciosa torta esta hecha por multiples bases de dulce de leche y de masa de hojaldre y finalmente lleva un merengue italiano flambeado', 
    imagen: '../imagenes/rogel.png',
    precio: '1600',
    cantidad: 0,
    otros: true
    }
];
class Carrito {
    constructor(cantidad){
        this.cantidad = parseInt(cantidad);
    }
    
    agregarAlCarrito(){
        this.cantidad ++;
    }
    quitarDelCarrito(cantidad){
        this.cantidad -= cantidad;
    }
}

//  CONSTANTES ELEMENTOS DEL DOM
const listadoProductos = document.getElementById("listaDeCarrito");
let contenidoProductoOtros = document.getElementById("contenidoProductoOtros")
const precioElementos = document.getElementsByClassName("precio");
const contenedorCanasta = document.getElementById("canasta");
const arrayCanasta = [];
const arrayCarrito = [];
arrayCarrito.push(new Carrito(0));
const elementoCarrito = arrayCarrito[0];
const carritoLocalStorage = localStorage.getItem("carrito");

//  FUNCIONES 
/* Con esta funci??n puedo eliminar productos de la canasta */
const eliminarProducto = (producto) => {
    elementoCarrito.quitarDelCarrito(producto.cantidad);
    producto.cantidad = 0;
    carritoHTML.innerHTML = elementoCarrito.cantidad;

    for (const productoCanasta of contenedorCanasta.children) {
    if (parseInt(productoCanasta.id) === parseInt(producto.id)) {
        productoCanasta.parentElement.removeChild(productoCanasta);
        
        // Use indexOf para obtener el ??ndice de alg??n item de un Array
        const index = arrayCanasta.indexOf(producto);
    
        arrayCanasta.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
    }  
    }
}
//Funciones para hacer animaciones concatenadas
function animaciones(){
    $(".animacionesImagenes").on("click", animar())
    }
function animar() {
$(".animacionesImagenes").css({
width: "500px", heigth: "400px"
})}

/* 

Con esta funci??n puedo agregar productos del contenedor a la canasta 
  */
const insertarCanasta = (producto) => {

    elementoCarrito.agregarAlCarrito();
    console.log(producto.nombre, producto.cantidad);

    if (producto.cantidad <= 0 && producto.otros == false) {
        producto.cantidad++;

        let contenedor = document.createElement("div");
        contenedor.className = "producto-canasta";
        contenedor.id = producto.id;
        contenedor.innerHTML = `<img src="${producto.imagen}">
        <div class="descripcion-producto">
        <p id="cantidad-${producto.id}"> ${producto.nombre} x ${producto.cantidad}</p>
        <b> $ ${producto.precio}</b>
        </div>`
    
        /* 
        Inserto un elemento bot??n al elemento recientemente creado
        que contenga la funci??n para poder eliminar el producto de la canasta
        */
        let boton = document.createElement("button");
        boton.className = "boton-eliminar";
        boton.innerHTML = "Eliminar";
        boton.onclick = () => eliminarProducto(producto);
        contenedor.appendChild(boton);
    
        contenedorCanasta.appendChild(contenedor);
        arrayCanasta.push(producto);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
        //localStorage.setItem("carrito", JSON.stringify(canasta));
        
    } else {
        producto.cantidad++;
        let cantidadProducto = document.getElementById(`cantidad-${producto.id}`);
        cantidadProducto.innerHTML = ` ${producto.nombre} x ${producto.cantidad}`;
        const indexCanasta = arrayCanasta.indexOf(producto);
        arrayCanasta.splice(indexCanasta, 1);
        arrayCanasta.push(producto);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
    }
    
}

const insertarCanastaLocalStorage = (producto) => {

    for (let index = 0; index < producto.cantidad; index++) {
        elementoCarrito.agregarAlCarrito();
    }

    carritoHTML.innerHTML = elementoCarrito.cantidad;
    let contenedor = document.createElement("div");
    contenedor.className = "producto-canasta";
    contenedor.id = producto.id;
    contenedor.innerHTML = `<img src="${producto.imagen}">
        <div class="descripcion-producto">
        <p id="cantidad-${producto.id}"> ${producto.nombre} x ${producto.cantidad}</p>
        <b> $ ${producto.precio}</b>
        </div>`
    
        /* 
        Inserto un elemento bot??n al elemento recientemente creado
        que contenga la funci??n para poder eliminar el prodcuto de la canasta
        */
    let boton = document.createElement("button");
    boton.className = "boton-eliminar";
    boton.innerHTML = "Eliminar";
    boton.onclick = () => eliminarProducto(producto);
    contenedor.appendChild(boton);
    
    contenedorCanasta.appendChild(contenedor);
    arrayCanasta.push(producto);
    localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
}

/* 
    Funci??n para crear productos din??micamente y crearlos en el contenedor 
  */
    const insertarProductos = () => {
        for (const producto of productos) {
        let contenidoProducto = document.createElement("div");
        let productosOtros = document.createElement("div")
        contenidoProducto.className = "row justify-content-center container__favoritos-box";
        contenidoProducto.id = producto.id;
    
        if (producto.id % 2 == 1 && producto.otros == false) {
            contenidoProducto.innerHTML = `
            <div class="col-12 col-md-6 container__favoritos-sushiDescripcion">
                <div class="contenedorCartas">
                    <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
                    <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
                    <p class="contenedorCartas__precio">$${producto.precio}</p>
                    <button class="contenedorCartas__enlace buttonaso" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
                </div>
                </div>
            <div class="col-12 col-md-6 container__favoritos-sushiImagen">
                <img class="container__sushiImagen-img" src="${producto.imagen}">
                </div>
                </div>`;
    
            listadoProductos.appendChild(contenidoProducto);
        } else if(producto.otros == false){
            contenidoProducto.innerHTML = `
            <div class="col-12 col-md-6 container__favoritos-sushiImagen oreder-md-1 order-2">
        <img class="container__sushiImagen-img" src="${producto.imagen}">
        </div>
        <div class="col-12 col-md-6 container__favoritos-sushiDescripcion order-md-2 order-1">
        <div class="contenedorCartas">
            <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
            <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
            <p class="contenedorCartas__precio">$${producto.precio}</p>
            <button class="contenedorCartas__enlace buttonaso" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
        </div>
        </div>`;    
    
        listadoProductos.appendChild(contenidoProducto);
        }
        if(producto.otros == true) {
            productosOtros.innerHTML = `
            <div id="${producto.id}">
                    <p><strong><em>${producto.nombre}:</em></strong></p>
                    <p>${producto.descripcion}</p>
                    <img class="imagenesProductos animacionesImagenes" src="${producto.imagen}"
                    alt="Lemonies">
                </div>
            `;
            
            contenidoProductoOtros.appendChild(productosOtros)
        }
        }
    }
const inicializarProductos = (productoLocal) => {
    for (const producto of productos){
        if (producto.id == productoLocal.id) {
            producto.cantidad = productoLocal.cantidad;
            insertarCanastaLocalStorage(producto);
        }
    }
}

const comprar = () => {
    for (const producto of productos){
        $(`#boton-${producto.id}`).on("click", () => { 
            insertarCanasta(producto); carritoHTML.innerHTML = (`${elementoCarrito.cantidad}`);
        });
    }
}
 /* Calculo el precio total del producto dependiendo de la cantidad */
const precioTotal = (precio, cantidad) => {
    return precio * cantidad
}

 /* Calculo el precio de todos los productos de la canasta */
const totalCarrito = () => {
    sumaTotalCarrito = 0;
    for (const producto of productos) {
        sumaTotalCarrito += precioTotal(producto.precio, producto.cantidad);
    }

    sumaTotalCarritoHTML.html(`$ ${sumaTotalCarrito}`);
}
/* Api de mercado pago */

let boton = document.getElementById("pagar", JSON);

boton.addEventListener("click", (e) => {
    pagar()
})

async function pagar() {
    const productosToMp = arrayCanasta.map(Element => {
        let nuevoElemento = {
        category_id: Element.id,
        title: Element.nombre,
        description: Element.descripcion,
        picture_url: Element.imagen, 
        unit_price: Number(Element.precio),
        quantity: Number(Element.cantidad),
        currency_id: "ARS"
        }
        return nuevoElemento;
    })

    const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
        method: "POST",
        headers: {
        Authorization: 
            "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006"
        },
        body: JSON.stringify({
        items: productosToMp,
        })
    }
);

    const data = await response.json();
    window.open(data.init_point, "_blank");
}
  //C??DIGO
let carritoHTML = document.getElementById("cantidadEnElCarrito");
let carritoParse;
let sumaTotalCarrito = 0;
let sumaTotalCarritoHTML = $("#sumaTotalCarrito");
insertarProductos();
comprar();

if (carritoLocalStorage) {
    carritoParse = JSON.parse(carritoLocalStorage);

    for (const producto of carritoParse) {
        inicializarProductos(producto);
    }
}

