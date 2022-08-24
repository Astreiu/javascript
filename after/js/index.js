// calcular costo total de productos y/o servicios

let gastoTotal = 0;
// let precioProducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que se ingrese un valor igual a cero, menor que cero o que no sea un valor valido numerico");

ingresarPrecio();
mostrarTotal();


function ingresarPrecio() {
    let precioProducto = 0;
    precioProducto = parseInt(prompt("Ingrese el precio del producto"));
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        // contador++;
    }

    if (precioProducto <= 0){
        console.log("Ha terminado de introducir los precios de los productos");
        alert("Ha terminado de introducir los precios de los productos");

    }
}

function calcularTotal(precioProducto) {
    return gastoTotal + precioProducto;
}

function mostrarTotal() {
    console.log("El precio total de los productos es $" + gastoTotal );
}
