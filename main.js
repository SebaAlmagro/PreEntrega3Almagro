function GraficasEnStock() {
    let graficas = [
        { nombre: 'Radeon RX 580 8gb', precio: 150.00 },
        { nombre: 'GeForce RTX 3060 12gb', precio: 300.00 },
        { nombre: 'GeForde GT 1030 2gb', precio: 100.00 },
        { nombre: 'GeForce RTX 3090 24 gb', precio: 799.00 },
        { nombre: 'GeForce RTX 2060 TI 6gb', precio: 400.00 }
    ];

    localStorage.setItem('listaProductos', JSON.stringify(graficas));

    mostrarProductos();
}

function agregarProducto() {
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = parseFloat(document.getElementById('precioProducto').value);

    if (nombreProducto.trim() !== '' && !isNaN(precioProducto)) {
        let producto = {
            nombre: nombreProducto,
            precio: precioProducto
        };

        let listaProductos = obtenerListaProductos();
        listaProductos.push(producto);
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

        mostrarProductos();
    } else {
        alert('Por favor, complete los campos correctamente.');
    }
}

function obtenerListaProductos() {
    let listaProductosGuardada = localStorage.getItem('listaProductos');
    return listaProductosGuardada ? JSON.parse(listaProductosGuardada) : [];
}

function mostrarProductos() {
    let listaProductos = obtenerListaProductos();
    let productosList = document.getElementById('productos');
    productosList.innerHTML = '';

    listaProductos.forEach(function(producto) {
        let listItem = document.createElement('li');
        listItem.innerText = 'Producto: ' + producto.nombre + ' - Precio: $' + producto.precio.toFixed(2);
        productosList.appendChild(listItem);
    });
}

window.onload = function() {
    mostrarProductos();
}
