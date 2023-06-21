let productos = [];
const carContenido = document.querySelector("#contenido");
const modalContainer = document.querySelector("#modal-container");
const verCarrito = document.querySelector("#verCarrito");
let carrito = [];

fetch("../json/articulos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    productos = datos;

    productos.forEach((producto) => {
      const content = document.createElement("div");
      content.classList.add("card_celular");
      content.classList.add("product");
      content.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <p class="celular_texto">${producto.precio}</p>
        <a href="#" class="boton" id="${producto.id}">Agregar al Carrito</a>
      `; 


      const comprar = content.querySelector(".boton");

      comprar.addEventListener("click", () => {
        const productoSeleccionado = productos.find((p) => p.id === producto.id);
        
        carrito.push({
          id: productoSeleccionado.id,
          nombre: productoSeleccionado.titulo,
          imagen: productoSeleccionado.imagen,
          precio: productoSeleccionado.precio,
        });

        localStorage.setItem('carrito', JSON.stringify(carrito));

        Swal.fire({
          title: '¡Producto agregado!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        console.log(carrito);
      });

      carContenido.append(content);
    });

    const carritoJSON = localStorage.getItem('carrito');

    if (carritoJSON) {
      carrito = JSON.parse(carritoJSON);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });

function mostrarArticulos(datos) {
  datos.forEach((producto) => {
    carContenido.innerHTML += `
      <h2>Nombre: ${producto.titulo} </h2>
      <p> Imagen: ${producto.imagen} </p>
      <p> Precio: ${producto.precio} </p>
      <p> ID: ${producto.id} </p>
      <button> Agregar al carrito </button>
    `;
  });
}

function eliminarProducto(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
