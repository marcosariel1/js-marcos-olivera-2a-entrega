let nombreIngresado = prompt('Ingrese su nombre')
alert('Bienvenido/a a pastelería "Es por tí"')



const carritoDeCompras = [];

const ordenMenorPrecio = () => {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
}


const ordenMayorPrecio = () => {
    productos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => producto.id + ". " + producto.nombre + " $" + producto.precio);
    alert("Lista de precios: \n\n" + listaOrdenada.join("\n"));
    comprar(listaOrdenada);
}



const comprar = (listaOrdenada) => {

    let productoCantidad = 0;
    let seguiComprando = false;




    do {

        productoPostre = prompt(nombreIngresado.toUpperCase() + (" Ingrese número de la delicia que desee \n\n" + listaOrdenada.join("\n")));


        const producto = productos.find(producto => producto.postre === productoPostre);

        productoCantidad = parseInt(prompt('¿Cuántos desea comprar?'));

        while (isNaN(productoCantidad) || productoCantidad <= 0) {
            alert("Debe agregar una cantidad válida");
            productoCantidad = parseInt(prompt('¿Cuántos desea comprar?'));

        }
        if (producto) {
            agregarAlCarrito(producto, productoCantidad, producto.id);

        } else {
            alert("Ese producto no existe.");
        }


        seguiComprando = confirm('¿Quieres comprar algo más?');


    } while (seguiComprando);


    const precioTotal = carritoDeCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    alert("El precio final es $" + precioTotal);

    alert("GRACIAS POR TU VISITA!");
};

const agregarAlCarrito = (producto, productoCantidad, productoId) => {
    const productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);

    if (productoRepetido) {
        productoRepetido.cantidad = + productoCantidad
    }
    else {
        producto.cantidad += productoCantidad;
        carritoDeCompras.push(producto);
    }
    console.log(carritoDeCompras);
}


ordenMenorPrecio();