/*¨Mostrar el carrito de compras*/

const comprarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1> 
        
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";

    });

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p class="celular_texto">$${product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

       eliminar.addEventListener("click", () => {
            eliminarProductos(product.id);
        });
    });


    /*Calcular el total a pagar*/

    const total = carrito.reduce((acc, el) => acc + parseInt(el.precio), 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <p class="modal-footer-text">Total a pagar: $${total}</p>
    <a href="#" class="modal-footer-button">Comprar</a>
    `;
    modalContainer.append(modalFooter);

};

verCarrito.addEventListener("click", comprarCarrito);


/*Eliminar productos del carrito*/

const eliminarProductos = (productId) => {
    carrito = carrito.filter((product) => {
        return product.id !== productId;
    });
    comprarCarrito();
};
