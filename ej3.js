class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const productoExistente = this.productos.find(
      producto => producto.nombre === nombre
    );
    if (productoExistente) {
      console.log(`Ya existe ${nombre} con ${productoExistente.unidades} unidades`);
    } else {
      this.productos.push({ nombre, precio, unidades });
    }
    this.montoTotal += precio * unidades;
  }

  mostrarProductos() {
    const nombresProductos = this.productos.map(producto => producto.nombre);
    console.log("productos: ", nombresProductos.join(", "));
  }
}

const carrito = new Carrito();
carrito.agregarProducto("Leche", 3, 2);
carrito.agregarProducto("Azucar", 5, 2);
carrito.agregarProducto("Leche", 3, 1);
console.log("monto total:", carrito.montoTotal);
carrito.mostrarProductos()
