// script.js
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Si no está autenticado, redirige a la página de inicio de sesión
        window.location.href = 'login.html';
    } else {
        // Si está autenticado, carga el inventario
        cargarProductos();
    }
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
        `;
        listaProductos.appendChild(tr);
    });
};

// script.js
function login() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Aquí iría la lógica de autenticación
    // Por ejemplo, verificar el usuario y la contraseña
    // Si son válidos, redirige a otra página
    window.location.href = 'index.html'; // Cambiar a la página deseada después del inicio de sesión
}
