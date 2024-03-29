
document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();
});

function cargarProductos() {
    const productos = [
        { id: 1, codigo: "1001", nombre: "Producto 1", cantidad: 10, cantidad_maxima: 20, estado: "Disponible" },
        { id: 2, codigo: "1002", nombre: "Producto 2", cantidad: 5, cantidad_maxima: 15, estado: "Por rellenar" },
        { id: 3, codigo: "1003", nombre: "Producto 3", cantidad: 20, cantidad_maxima: 20, estado: "Disponible" }
    ];

    const listaProductos = document.getElementById('lista-productos');

    productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.cantidad_maxima}</td>
            <td>${producto.estado}</td>
            <td><button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
        `;
        listaProductos.appendChild(tr);
    });
}

function agregarProducto() {
    const codigo = document.getElementById('inputCodigo').value;
    const nombre = document.getElementById('inputNombre').value;
    const cantidad = document.getElementById('inputCantidad').value;
    const cantidadMaxima = document.getElementById('inputCantidadMaxima').value;

    const nuevoProducto = {
        id: Math.floor(Math.random() * 1000) + 1,
        codigo: codigo,
        nombre: nombre,
        cantidad: cantidad,
        cantidad_maxima: cantidadMaxima,
        estado: cantidad == cantidadMaxima ? "Disponible" : "Por rellenar"
    };

    const listaProductos = document.getElementById('lista-productos');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nuevoProducto.id}</td>
        <td>${nuevoProducto.codigo}</td>
        <td>${nuevoProducto.nombre}</td>
        <td>${nuevoProducto.cantidad}</td>
        <td>${nuevoProducto.cantidad_maxima}</td>
        <td>${nuevoProducto.estado}</td>
        <td><button class="btn btn-danger" onclick="eliminarProducto(${nuevoProducto.id})">Eliminar</button></td>
    `;
    listaProductos.appendChild(tr);
}

function eliminarProducto(id) {
    const productoAEliminar = document.getElementById(id);
    productoAEliminar.remove();
}

function login() {
    // Aquí iría la lógica de autenticación
    // Por ejemplo, verificar el usuario y la contraseña
    // Si son válidos, redirige a index.html
    window.location.href = 'index.html';
}