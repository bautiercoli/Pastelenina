const productos_disponibles = 45
const limite_maximo = 3
const productos_agotados = 6
for (let i = 1; i <= productos_disponibles; i++) {
    
    if (i >= limite_maximo) {
        break;
    }
    else if (i === productos_agotados) {
        continue;
    }
    
    let nombreIngresado = prompt("Ingrese que productos que desea comprar");
    alert (`${nombreIngresado} sera el prducto Nº ${i}`); 
}
