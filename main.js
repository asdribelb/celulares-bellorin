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
        titulo: "iphone X",
        imagen: "../img/iphone x.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 415990,
    },
    {
        id: "iphone-11",
        titulo: "iphone 11",
        imagen: "../img/iphone 11.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 500990,
    },
    {
        id: "iphone-12",
        titulo: "iphone 12",
        imagen: "../img/iphone 12.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 310990,
    },
    {
        id: "iphone-13",
        titulo: "iphone 13",
        imagen: "../img/iphone 13.jpg",
        categoria: {
            nombre: "Apple",
            id: "apple",
        },
        precio: 415990,
    },
    {
        id: "samsung-s21",
        titulo: "samsung s21",
        imagen: "../img/samsung galaxy s21.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 250990,
    },
    {
        id: "samsung-note20",
        titulo: "samsung note20",
        imagen: "../img/samsung20.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 310990,
    },
    {
        id: "samsung-a52",
        titulo: "samsung a52",
        imagen: "../img/samsung A52.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 415990,
    },
    {
        id: "samsung-a32",
        titulo: "samsung a32",
        imagen: "../img/samsung a32.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 400990,
    },
    {
        id: "samsung-s22",
        titulo: "samsung s22",
        imagen: "../img/samsungs22.jpg",
        categoria: {
            nombre: "Samsung",
            id: "samsung",
        },
        precio: 500990,
    },
    {
        id: "samsung-s20",
        titulo: "samsung s20",
        imagen: "../img/samsungs20.jpg",
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

        console.log(carrito);
    });

    carContenido.append(content);
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title"></h1>
        <h1 class="modal-header-button">X</h1>
    `;
    modalContainer.append(verCarrito);

    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";

    });

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.imagen}" alt="${product.titulo}">
            <h3>${product.titulo}</h3>
            <p class="celular_texto">$${product.precio}</p>
        `;

        modalContainer.append(carritoContent);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <p class="modal-footer-text">Total a pagar: $${total}</p>
    <a href="#" class="modal-footer-button">Comprar</a>
    `;
    modalContainer.append(modalFooter);
    

});
