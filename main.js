const productos = [
    {
        id: "iphone-7",
        titulo: "Iphone 7",
        imagen: "../img/iphone 7.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 150990,
    },
    {
        id: "iphone-8",
        titulo: "Iphone 8",
        imagen: "../img/iphone 8.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 169990,
    },
    {
        id: "iphone-x",
        titulo: "Iphone X",
        imagen: "../img/iphone x.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 415990,
    },
    {
        id: "iphone-11",
        titulo: "Iphone 11",
        imagen: "../img/IPHONE 11",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 500990,
    },
    {
        id: "iphone-12",
        titulo: "Iphone 12",
        imagen: "../img/iphone 12.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 310990,
    },
    {
        id: "iphone-13",
        titulo: "Iphone 13",
        imagen: "../img/iphone 13.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 415990,
    },
    {
        id: "samsung-s21",
        titulo: "Samsung S21",
        imagen: "../img/samsung galaxy s21.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 250990,
    },
    {
        id: "samsung-note20",
        titulo: "Samsung Note20",
        imagen: "../img/SAMSUNG20.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 310990,
    },
    {
        id: "samsung-a52",
        titulo: "Samsung A52",
        imagen: "../img/SAMSUNG A52.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 415990,
    },
    {
        id: "samsung-a32",
        titulo: "Samsung A32",
        imagen: "../img/SAMSUNG A32.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 400990,
    },
    {
        id: "samsung-s22",
        titulo: "Samsung S22",
        imagen: "../img/samsungs22.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 500990,
    },
    {
        id: "samsung-s20",
        titulo: "Samsung S20",
        imagen: "../img/SAMSUNGS20.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 699990,
    },
];

// Variables
const carContenido = document.querySelector("#contenido");
const verCarrito = document.querySelector("#verCarrito");
const modalContainer = document.querySelector("#modal-container");

let carrito = [];

productos.forEach((product) => {
    const content = document.createElement("div");
    content.classList.add("card_celular");
    content.classList.add("product");
    content.innerHTML = `
        <img src="${product.imagen}" alt="${product.titulo}">
        <h3>${product.titulo}</h3>
        <p class="celular_texto">${product.precio}</p>
        <a href="#" class="boton" id="btn7">Agregar al Carrito</a>
    `;

    const comprar = content.querySelector(".boton");

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            titulo: product.titulo,
            imagen: product.imagen,
            categoria: product.categoria,
            precio: product.precio,
        });

        localStorage.setItem('carrito', JSON.stringify(carrito));

        console.log(carrito);
    });

    carContenido.append(content);

    const carritoJSON = localStorage.getItem('carrito');

    if (carritoJSON) {
        carrito = JSON.parse(carritoJSON);
    }
});

function eliminarProducto(id) {
    carrito = carrito.filter((product) => product.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}





