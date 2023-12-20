const productosArray = [
    {   
        id: "manzana",
        titulo: "Manzanas", 
        imagen: 
                "https://as1.ftcdn.net/jpg/02/75/66/94/220_F_275669477_VwOo5r3QlQ0CNhoq9lS0sZZjZxZpHcSc.jpg",
        categoria: {
            nombre: "Frutas",
            id: "frutas"
        },
        precio: 45.30,
    },
    {
        id: "fresa",
        titulo: "Fresas", 
        imagen: 
                "https://as2.ftcdn.net/jpg/02/76/15/51/220_F_276155116_47yqpsoVSG1OddgOPEz7hk1N49dKMahH.jpg",
        categoria: {
            nombre: "Frutas",
            id: "frutas"
        },
        precio: 60,
    },
    {
        id: "naranja",
        titulo: "Naranjas", 
        imagen: 
                "https://as1.ftcdn.net/jpg/04/18/00/42/220_F_418004211_Ou15VpjsWrZMhGRcl0Fgr2D3y7MtXsQm.jpg",
        categoria: {
            nombre: "Frutas",
            id: "frutas"
        },
        precio: 22.50,
    },
    {
        id: "pera",
        titulo: "Peras", 
        imagen: 
                "https://as2.ftcdn.net/jpg/02/71/64/45/220_F_271644516_ViHphYEuaMinkINSNwGP2fOTo6b4TEBp.jpg",
        categoria: {
            nombre: "Frutas",
            id: "frutas"
        },
        precio: 40,
    },
    {
        id: "papa",
        titulo: "Papas", 
        imagen: 
                "https://as2.ftcdn.net/jpg/03/84/54/01/220_F_384540147_EN9pgQZ4DtbAiyjIKNi0UTLMqqLUanue.jpg",
        categoria: {
            nombre: "Verduras",
            id: "verduras"
        },
        precio: 18,
    },
    {
        id: "pimiento",
        titulo: "Pimientos", 
        imagen: 
                "https://as2.ftcdn.net/jpg/02/95/83/89/220_F_295838941_nSfWhk7Xahwz2mHDqF2KmQkgAt7G7oJl.jpg",
        categoria: {
            nombre: "Verduras",
            id: "verduras"
        },
        precio: 91,
    },
    {
        id: "tomate",
        titulo: "Tomates", 
        imagen: 
                "https://as2.ftcdn.net/jpg/03/56/42/99/220_F_356429997_ZcDS2S757sG96lOgcD7Fcs7tw7lHLTKk.jpg",
        categoria: {
            nombre: "Verduras",
            id: "verduras"
        },
        precio: 15,
    },
    {
        id: "zanahoria",
        titulo: "Zanahorias", 
        imagen:
                "https://as1.ftcdn.net/jpg/05/16/22/64/220_F_516226489_sRNZ8BZ28yxdlUnNyITMu06mO4th5CRO.jpg",
        categoria: {
            nombre: "Verduras",
            id: "verduras"
        },
        precio: 17,
    },
    {
        id: "cacahuate",
        titulo: "Cacahuates", 
        imagen: 
                "https://as2.ftcdn.net/jpg/00/84/62/93/220_F_84629336_Yxjw1ukaBnBwXqYbSgOc4YmqqUK5mquB.jpg",
        categoria: {
            nombre: "Leguminosas",
            id: "leguminosas"
        },
        precio: 60,
    },
    {
        id: "chicharo",
        titulo: "Chícharos", 
        imagen: 
                "https://as2.ftcdn.net/jpg/01/58/41/19/220_F_158411929_dlLv5yKcuCUpUIIJpUmoiRVHsAF0zy1T.jpg",
        categoria: {
            nombre: "Leguminosas",
            id: "leguminosas"
        },
        precio: 67,
    },
    {
        id: "frijol",
        titulo: "Frijoles", 
        imagen: 
                "https://as2.ftcdn.net/jpg/00/94/57/21/220_F_94572102_rl95iV9ImZuf6jPQezwGPB6c8QTdeurM.jpg",
        categoria: {
            nombre: "Leguminosas",
            id: "leguminosas"
        },
        precio: 21,
    },
    {
        id: "lenteja",
        titulo: "Lentejas", 
        imagen: 
                "https://as1.ftcdn.net/jpg/00/93/16/30/220_F_93163011_4JQ1fwg6ukgaPmvosxgzfE82NVnM1o3v.jpg",
        categoria: {
            nombre: "Leguminosas",
            id: "leguminosas"
        },
        precio: 36,
    },
]

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".productoAgregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` 
                <img class="productoImagen" src=${producto.imagen} alt="${producto.titulo}">
                <div class="productoDetalles">
                        <h3 class="productoTitulo">${producto.titulo}</h3>
                        <p class="productoPrecio">$${producto.precio}</p>
                        <button class="productoAgregar" id="${producto.id}"> Agregar </button>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();

}

cargarProductos(productosArray);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productosArray.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre; 
            const productosBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productosArray);
        }


    
    })
});

function actualizarBotonesAgregar() { 
    botonesAgregar = document.querySelectorAll(".productoAgregar");

    botonesAgregar.forEach(boton =>  {
        boton.addEventListener("click", agregarAlCarrito);
    });
} 

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    
    const id = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) { 

        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;


    } else { 
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

}

function actualizarNumerito() { 
    let numerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    console.log(actualizarnumerito);
}