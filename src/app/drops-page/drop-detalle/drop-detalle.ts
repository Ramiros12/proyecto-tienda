import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CarritoService, ProductoCarrito } from '../../services/carrito.service';

interface Prenda {
  nombre: string;
  precio: string;
  imagen: string;
  badge: string;
  material: string;
  tallas: string[];
  colores: string[];
  genero: string;
  fit: string;
  descripcion: string;
}

interface Categoria {
  id: string;
  titulo: string;
  color: string;
  prendas: Prenda[];
}

@Component({
  selector: 'app-drop-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './drop-detalle.html',
  styleUrls: ['./drop-detalle.css']
})
export class DropDetalleComponent implements OnInit {

  categoriaActual: string = '';
  tituloActual: string = '';
  colorActual: string = '#fbff00';
  prendas: Prenda[] = [];
  agregado: string = ''; // nombre del último producto agregado

  // inyectamos el servicio
  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService
  ) {}

  // getter para mostrar el contador en el template
  get totalCarrito() {
    return this.carritoService.cantidadTotal();
  }

  categorias: Record<string, Categoria> = {
    gorras: {
      id: 'gorras',
      titulo: 'GORRAS',
      color: '#fbff00',
      prendas: [
        {
          nombre: 'Snapback Shadow SW',
          precio: '$65.000',
          imagen: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&q=80',
          badge: 'NEW',
          material: '100% Algodón estructurado',
          tallas: ['S/M', 'M/L', 'L/XL'],
          colores: ['Negro', 'Gris Carbón', 'Oliva'],
          genero: 'Unisex',
          fit: 'Ajustable — cierre snapback',
          descripcion: 'Visera plana, bordado frontal SW, interior a rayas.'
        },
        {
          nombre: 'Trucker Cap Urban Dark',
          precio: '$55.000',
          imagen: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&q=80',
          badge: 'HOT',
          material: 'Frente algodón / Malla trasera poliéster',
          tallas: ['S/M', 'M/L'],
          colores: ['Negro/Negro', 'Negro/Gris', 'Caqui/Beige'],
          genero: 'Unisex',
          fit: 'Ajustable — cierre snapback plástico',
          descripcion: 'Panel frontal bordado, malla trasera transpirable.'
        }
      ]
    },
    hoodies: {
      id: 'hoodies',
      titulo: 'HOODIES',
      color: '#00f2ff',
      prendas: [
        {
          nombre: 'Hoodie Oversized Drop 001',
          precio: '$189.000',
          imagen: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=700&q=80',
          badge: 'LIMITED',
          material: '380g French Terry 80% algodón 20% poliéster',
          tallas: ['S', 'M', 'L', 'XL', 'XXL'],
          colores: ['Negro Carbón', 'Gris Oscuro'],
          genero: 'Masculino / Unisex',
          fit: 'Oversized — hombros caídos',
          descripcion: 'Capucha doble capa, bolsillo canguro, graphic print en espalda.'
        },
        {
          nombre: 'Zip-Up Shadow Hoodie',
          precio: '$210.000',
          imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=80',
          badge: 'NEW',
          material: '360g Fleece algodón premium',
          tallas: ['S', 'M', 'L', 'XL'],
          colores: ['Negro', 'Verde Militar', 'Crema'],
          genero: 'Masculino / Femenino',
          fit: 'Regular — cierre frontal YKK',
          descripcion: 'Cremallera metálica YKK, bolsillos laterales con cierre.'
        }
      ]
    },
    camisetas: {
      id: 'camisetas',
      titulo: 'CAMISETAS',
      color: '#ffffff',
      prendas: [
        {
          nombre: 'Tee Graphic Street 001',
          precio: '$89.000',
          imagen: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&q=80',
          badge: 'HOT',
          material: '200g Jersey algodón peinado',
          tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          colores: ['Blanco', 'Negro', 'Beige'],
          genero: 'Unisex',
          fit: 'Oversize — largo extendido',
          descripcion: 'Gráfico serigrafía al frente, cuello redondo reforzado.'
        },
        {
          nombre: 'Tee Urban Basic Washed',
          precio: '$75.000',
          imagen: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&q=80',
          badge: 'NEW',
          material: '180g Algodón washed vintage',
          tallas: ['S', 'M', 'L', 'XL'],
          colores: ['Negro Washed', 'Gris Washed', 'Azul Oscuro'],
          genero: 'Masculino / Femenino',
          fit: 'Regular — corte recto',
          descripcion: 'Tratamiento washed para look desgastado, etiqueta bordada SW.'
        }
      ]
    },
    pantalones: {
      id: 'pantalones',
      titulo: 'PANTALONES',
      color: '#ff8000',
      prendas: [
        {
          nombre: 'Cargo Street Negro',
          precio: '$165.000',
          imagen: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=80',
          badge: 'LIMITED',
          material: 'Ripstop 65% poliéster 35% algodón',
          tallas: ['28', '30', '32', '34', '36'],
          colores: ['Negro', 'Caqui', 'Verde Cargo'],
          genero: 'Masculino',
          fit: 'Baggy — cadera baja',
          descripcion: '6 bolsillos funcionales, cinturilla elástica trasera.'
        },
        {
          nombre: 'Jogger Urban Premium',
          precio: '$135.000',
          imagen: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80',
          badge: 'NEW',
          material: '300g French Terry algodón suave',
          tallas: ['XS', 'S', 'M', 'L', 'XL'],
          colores: ['Negro', 'Gris Melange', 'Beige'],
          genero: 'Unisex',
          fit: 'Tapered — tobillo ajustado',
          descripcion: 'Cinturilla con cordón plano, bolsillos laterales profundos.'
        }
      ]
    }
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoriaActual = params['id'];
      const cat = this.categorias[this.categoriaActual];
      if (cat) {
        this.tituloActual = cat.titulo;
        this.colorActual = cat.color;
        this.prendas = cat.prendas;
      }
    });
  }

  agregarAlCarrito(prenda: Prenda) {
    const producto: ProductoCarrito = {
      nombre: prenda.nombre,
      precio: prenda.precio,
      imagen: prenda.imagen,
      categoria: this.tituloActual,
      cantidad: 1
    };
    this.carritoService.agregar(producto);
    this.agregado = prenda.nombre;
    setTimeout(() => this.agregado = '', 2000);
  }
}