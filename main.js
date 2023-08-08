
let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    total += precio;
}

function mostrarCarrito() {
    let contenido = "Carrito de compras:\n";
    for (let i = 0; i < carrito.length; i++) {
        contenido += carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    contenido += "Total: $" + total;
    return contenido;
}

function buscarProducto(nombre) {
    let productoEncontrado = carrito.find(function (producto) {
        return producto.nombre.toLowerCase() === nombre.toLowerCase();
    });

    return productoEncontrado;
}

function filtrarPorPrecio(minimo, maximo) {
    let productosFiltrados = carrito.filter(function (producto) {
        return producto.precio >= minimo && producto.precio <= maximo;
    });

    return productosFiltrados;
}

let continuar = true;
while (continuar) {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    agregarProducto(nombreProducto, precioProducto);

    continuar = confirm("¿Desea agregar otro producto?");
}

let carritoContenido = mostrarCarrito();
alert(carritoContenido);

let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
let productoEncontrado = buscarProducto(productoBuscado);
if (productoEncontrado) {
    alert("Producto encontrado:\n" + productoEncontrado.nombre + " - $" + productoEncontrado.precio);
} else {
    alert("Producto no encontrado");
}

let precioMinimo = parseFloat(prompt("Ingrese el precio mínimo para filtrar:"));
let precioMaximo = parseFloat(prompt("Ingrese el precio máximo para filtrar:"));
let productosFiltrados = filtrarPorPrecio(precioMinimo, precioMaximo);
let productosFiltradosContenido = "Productos en el rango de precios:\n";
for (let i = 0; i < productosFiltrados.length; i++) {
    productosFiltradosContenido += productosFiltrados[i].nombre + " - $" + productosFiltrados[i].precio + "\n";
}
alert(productosFiltradosContenido);
