/*Funcion de los articulos */

let articulo = function (nombre, marca, precio, stock) {
    this.nombre = nombre,
        this.marca = marca,
        this.precio = precio,
        this.stock = stock
}

let articulo1 = new articulo('Iphone 7', 'Apple', 150990, 10)
let articulo2 = new articulo('Iphone 8', 'Apple', 200000, 10)
let articulo3 = new articulo('Iphone X', 'Apple', 239990, 20)
let articulo4 = new articulo('Iphone 11', 'Apple', 419990, 30)
let articulo5 = new articulo('Iphone 12 PRO', 'Apple', 500000, 50)
let articulo6 = new articulo('Iphone 13', 'Apple', 699990, 60)

let articulo7 = new articulo('Samsung Galaxy S21', 'Samsung', 250000, 15)
let articulo8 = new articulo('Samsung Galaxy Note 20', 'Samsung', 310990, 20)
let articulo9 = new articulo('Samsung Galaxy A52', 'Samsung', 415990, 25)
let articulo10 = new articulo('Samsung Galaxy A32', 'Samsung', 499000, 30)
let articulo11 = new articulo('Samsung Galaxy Watch 3', 'Samsung', 560000, 45)
let articulo12 = new articulo('Samsung Galaxy Buds Pro', 'Samsung', 799990, 65)

let apple = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6]
let samsung = [articulo7, articulo8, articulo9, articulo10, articulo11, articulo12]

console.table(apple)
console.table(samsung)


/*Bienvenida a mi Tienda Celulares Bellorin*/

alert("Bienvenidos a mi Tienda de Celulares, trabajamos con las siguientes marcas: \nAPPLE \nSAMSUNG");

let marcaIngresada;

while (true) {
    marcaIngresada = prompt("Ingrese la Marca que desea comprar");

    if (marcaIngresada.toLowerCase() === "apple") {
        console.table(apple);
        break;
    } else if (marcaIngresada.toLowerCase() === "samsung") {
        console.table(samsung);
        break;
    } else {
        alert("No tenemos esa marca disponible");
    }
}

function calcularTotalCarrito(marcaIngresada) {
    let carrito = [];
    let total = 0;

    if (marcaIngresada.toLowerCase() === "apple") {
        while (true) {
            let nombreArticulo = prompt("Ingrese el nombre del artículo que desea agregar al carrito (Escriba 'cancelar' para finalizar la compra)")
            if (nombreArticulo.toLowerCase() === "cancelar") {
                break;
            }

            let cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo que desea agregar al carrito"));

            // Buscar el artículo en la lista de Apple
            let articuloEncontrado = apple.find((articulo) => articulo.nombre.toLowerCase() === nombreArticulo.toLowerCase());

            if (articuloEncontrado) {
                if (articuloEncontrado.stock >= cantidadArticulo) {
                    articuloEncontrado.stock -= cantidadArticulo;
                    articuloEncontrado.cantidad += cantidadArticulo;
                    carrito.push(articuloEncontrado);
                    articuloEncontrado.stock--;
                    total += articuloEncontrado.precio * cantidadArticulo;
                    alert("Artículo agregado al carrito");
                } else {
                    alert("No hay stock disponible de ese artículo");
                }
            } else {
                alert("El artículo ingresado no existe en la lista de Apple");
            }
        }
    } else if (marcaIngresada.toLowerCase() === "samsung") {
        while (true) {
            let nombreArticulo = prompt("Ingrese el nombre del artículo que desea agregar al carrito (Escriba 'cancelar' para finalizar la compra)");

            if (nombreArticulo.toLowerCase() === "cancelar") {
                break;
            }

            let cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo que desea agregar al carrito"));

            // Buscar el artículo en la lista de Samsung
            let articuloEncontrado = samsung.find((articulo) => articulo.nombre.toLowerCase() === nombreArticulo.toLowerCase());

            if (articuloEncontrado) {
                if (articuloEncontrado.stock >= cantidadArticulo) {
                    articuloEncontrado.stock -= cantidadArticulo;
                    articuloEncontrado.cantidad += cantidadArticulo;
                    carrito.push(articuloEncontrado);
                    total += articuloEncontrado.precio * cantidadArticulo;
                    alert("Artículo agregado al carrito");
                } else {
                    alert("No hay stock disponible de ese artículo");
                }
            } else {
                alert("El artículo ingresado no existe en la lista de Samsung");
            }
        }
    }

    console.log("Artículos en el carrito:");
    console.log(carrito);

    alert("Suma total de los artículos en el carrito: $" + total);
}

calcularTotalCarrito(marcaIngresada);