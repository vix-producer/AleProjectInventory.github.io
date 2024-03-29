from flask import Flask, render_template, request, redirect, url_for, session
import random

app = Flask(__name__)
app.secret_key = 'secret_key'  # Clave secreta para firmar la sesión

# Usuario y contraseña (en un entorno real, esto debería estar en una base de datos y ser almacenado de forma segura)
USUARIO = 'ale'
CONTRASEÑA = '123456'

# Lista de productos (sustituye esta lista por una base de datos en un entorno real)
productos = [
    {"id": 1, "codigo": random.randint(1000, 9999), "nombre": "Producto 1", "cantidad": 10, "cantidad_maxima": 20},
    {"id": 2, "codigo": random.randint(1000, 9999), "nombre": "Producto 2", "cantidad": 20, "cantidad_maxima": 30},
    {"id": 3, "codigo": random.randint(1000, 9999), "nombre": "Producto 3", "cantidad": 30, "cantidad_maxima": 40}
]

@app.route('/')
def index():
    """
    Renderiza la página principal del inventario.

    Muestra una lista de productos con sus códigos, nombres, cantidades y estados.
    """
    if 'usuario' in session:
        for producto in productos:
            producto['estado'] = 'lleno' if producto['cantidad'] == producto['cantidad_maxima'] else 'rellenar'
        return render_template('index.html', productos=productos)
    else:
        return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    """
    Procesa el inicio de sesión del usuario.

    Si el usuario y la contraseña son correctos, inicia sesión y redirige a la página principal del inventario.
    Si hay un error en las credenciales, muestra un mensaje de error en la página de inicio de sesión.
    """
    if request.method == 'POST':
        usuario = request.form['usuario']
        contraseña = request.form['contraseña']
        if usuario == USUARIO and contraseña == CONTRASEÑA:
            session['usuario'] = usuario
            return redirect(url_for('index'))
        else:
            return render_template('login.html', mensaje='Usuario o contraseña incorrectos')
    else:
        return render_template('login.html', mensaje='')

@app.route('/logout')
def logout():
    """
    Cierra la sesión del usuario y redirige a la página de inicio de sesión.
    """
    session.pop('usuario', None)
    return redirect(url_for('login'))

@app.route('/agregar', methods=['POST'])
def agregar():
    """
    Agrega un nuevo producto al inventario.

    Recibe los datos del formulario (nombre, cantidad, cantidad máxima), genera un código aleatorio y añade el producto a la lista.
    """
    nombre = request.form['nombre']
    cantidad = int(request.form['cantidad'])
    cantidad_maxima = int(request.form['cantidad_maxima'])
    producto = {"id": len(productos) + 1, "codigo": random.randint(1000, 9999), "nombre": nombre, "cantidad": cantidad, "cantidad_maxima": cantidad_maxima}
    productos.append(producto)
    return redirect(url_for('index'))

@app.route('/eliminar/<int:id>')
def eliminar(id):
    """
    Elimina un producto del inventario.

    Recibe el ID del producto a eliminar y actualiza la lista de productos eliminando el producto correspondiente.
    """
    global productos
    productos = [producto for producto in productos if producto['id'] != id]
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
