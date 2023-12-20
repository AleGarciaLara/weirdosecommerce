let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");
const botonVaciar = document.querySelector("carritoAccionesVaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carritoAccionesComprar");



function cargarProductosCarrito(){ 
    if (productosEnCarrito && productosEnCarrito.lenght > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
    
        contenedorCarritoProductos.innerHTML = ""; 
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carritoProducto");
            div.innerHTML = `
            <img class="carritoProductoImagen" src="${producto.imagen}>
            <div class="${producto.titulo}">
                <small>Nombre</small>
                <h3>"${producto.titulo}</h3>
            </div>
            <div class="carritoProductoCantidad">
                <small>Cantidad</small>
                <p>"${producto.cantidad}"</p>
            </div>
            <div class="carritoProductoPrecio">
                <small>Precio</small>
                <p>$"${producto.precio}"</p>
            </div>
            <div class="carritoProductoSubtotal">
                <small>Subtotal</small>
                <p>$"${producto.precio * producto.cantidad}"</p>
                </div>
                <button class="carritoProductoEliminar" id="${producto.id}><i class="bi bi-trash3-fill"></i></button>
            </div>
            `
    
            contenedorCarritoProductos.append(div)
        })
    
    
    } else{
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
}

cargarProductosCarrito(); 


function actualizarBotonesEliminar() { 
    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");

    botonesEliminar.forEach(boton =>  {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(){ 
    const idBoton = e.currentTarget.id;
    
    const productoEliminado = productosEnCarrito.find(producto => producto.id === idBoton);

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));


}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.lenght = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

}

function actualizarTotal() { 
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad, 0));
    total.innerText = `$${totalCalculado}`;
}
    
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){
    productosEnCarrito.lenght = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));


    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled"); 

}