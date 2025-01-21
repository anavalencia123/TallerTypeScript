"use strict";
;
;
;
var tiendas = [
    {
        id: 1,
        nombre: "San Juan",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1599.99, stock: 10, estado: true },
                    { nombre: "Radio", precio: 49.99, stock: 25, estado: true },
                    { nombre: "Teléfono", precio: 699.99, stock: 15, estado: false },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 19.99, stock: 50, estado: true },
                    { nombre: "Pantalón", precio: 39.99, stock: 30, estado: true },
                    { nombre: "Zapatos", precio: 89.99, stock: 20, estado: false },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1699.99, stock: 8, estado: true },
                    { nombre: "Radio", precio: 59.99, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 799.99, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 14.99, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 49.99, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 99.99, stock: 15, estado: true },
                ],
            },
        ],
    },
];
// Recorrer y mostrar la información
function mostrarTienda() {
    tiendas.forEach(function (tienda) {
        console.log("\n\n\nTienda: ", tienda.nombre, "(ID: ", tienda.id, ")");
        tienda.categorias.forEach(function (categoria) {
            console.log("  \n\nCategor\u00EDa: ".concat(categoria.nombre));
            categoria.productos.forEach(function (producto) {
                console.log("    Producto: ".concat(producto.nombre));
                console.log("      Precio: ".concat(producto.precio.toFixed(2), " Pesos"));
                console.log("      Stock: ", producto.stock);
                console.log("      Estado: ".concat(producto.estado ? "Activo" : "Inactivo\n"));
            });
        });
    });
}
mostrarTienda();
/*************  ✨ Codeium Command 🌟  *************/
// necesito un men  que me salga la opci n de buscar un producto y salir del programa
// en el cual aparezca el precio, stock y si est  activo o inactivo
var readline = require('readline');
// Crear una interfaz de lectura de datos desde la consola
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para buscar un producto
function buscarProducto(producto) {
    let encontrado = false; // Variable para saber si encontramos el producto
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            categoria.productos.forEach(function (prod) {
                if (prod.nombre.toLowerCase() === producto.toLowerCase()) { // Compara ignorando mayúsculas/minúsculas
                    encontrado = true;
                    console.log("\n\nProducto: " + prod.nombre);
                    console.log("  Precio: " + prod.precio.toFixed(2) + " Pesos");
                    console.log("  Stock: " + prod.stock);
                    console.log("  Estado: " + (prod.estado ? "Activo" : "Inactivo"));
                    console.log("  Se encuentra en la tienda: " + tienda.nombre);
                    console.log("  En la categoría: " + categoria.nombre);
                }
            });
        });
    });
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}
// Función para mostrar el menú y gestionar la entrada del usuario
function mostrarMenu() {
    rl.question("\nElija una opción:\n1. Buscar producto\n2. Salir\n", function (opcion) {
        if (opcion === "1") {
            rl.question("Ingrese el nombre del producto a buscar: ", function (producto) {
                buscarProducto(producto);
                mostrarMenu(); // Mostrar el menú nuevamente
            });
        }
        else if (opcion === "2") {
            console.log("Saliendo del programa...");
            rl.close(); // Cierra la interfaz de lectura
        }
        else {
            console.log("Opción no válida, intente de nuevo.");
            mostrarMenu(); // Mostrar el menú nuevamente
        }
    });
}
// Iniciar el programa mostrando el menú
mostrarMenu();
