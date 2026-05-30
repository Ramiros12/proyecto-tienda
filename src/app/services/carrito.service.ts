import { Injectable, signal, computed } from '@angular/core';

export interface ProductoCarrito {
  nombre: string;
  precio: string;
  imagen: string;
  categoria: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private items = signal<ProductoCarrito[]>([]);

  total = computed(() => this.items().length);

  cantidadTotal = computed(() =>
    this.items().reduce((acc, item) => acc + item.cantidad, 0)
  );

  getItems() {
    return this.items();
  }

  agregar(producto: ProductoCarrito) {
    const actuales = this.items();
    const existe = actuales.find(i => i.nombre === producto.nombre);
    if (existe) {
      this.items.set(
        actuales.map(i =>
          i.nombre === producto.nombre
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        )
      );
    } else {
      this.items.set([...actuales, { ...producto, cantidad: 1 }]);
    }
  }

  eliminar(nombre: string) {
    this.items.set(this.items().filter(i => i.nombre !== nombre));
  }

  vaciar() {
    this.items.set([]);
  }

  getPrecioTotal() {
    return this.items().reduce((acc, item) => {
      const precio = parseInt(item.precio.replace(/[$.,]/g, ''));
      return acc + (precio * item.cantidad);
    }, 0);
  }
}