const productos = [
    {
        id: "iphone-7",
        titulo: "Apple iPhone 7 128 GB",
        imagen: "../img/iphone 7.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 150.990
    },

    {
        id: "iphone-8",
        titulo: "Apple iPhone 8 64 GB",
        imagen: "../img/iphone 8.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 169.990
    },

    {
        id: "iphone-x",
        titulo: "Apple iPhone x 128 GB ",
        imagen: "../img/iphonex.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 415.990
    },

    {
        id: "iphone-11",
        titulo: "Apple iPhone 11 128 GB",
        imagen: "../img/iphone11.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 500.990
    },

    {
        id: "iphone-12",
        titulo: "iphone 12",
        imagen: "Apple iPhone 12 128 GB",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 310.990
    },

    {
        id: "iphone-13",
        titulo: "iApple iPhone 13 128 GB",
        imagen: "../img/iphone13.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 415.990
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
let agregar = documen.querySelectorAll(".agregar");


function cargarProductos() {

    cargarProductos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src=".{producto.imagen}" alt="${producto.titulo}">
            <h3> ${producto.titulo}</h3>
            <p class = "celular_texto">$${producto.precio}</p>
            <button class="agregar"> id="${producto.id} </button>
       `
        contenedorProductos.append(div);

    })
}

function agregarAlCarrito(boton) {
    let id = boton.id;

    let producto = productos.find(function (p) {
        return p.id === id;
      });
}
