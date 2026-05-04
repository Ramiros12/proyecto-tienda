import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor y *ngIf en el HTML

@Component({
  selector: 'app-home',       // Nombre del componente para usar en HTML: <app-home>
  standalone: true,           // Componente independiente, no necesita NgModule
  imports: [CommonModule],    // Importamos CommonModule para directivas *ngFor y *ngIf
  templateUrl: './home.component.html',  // Archivo HTML del componente
  styleUrls: ['./home.component.css']    // Archivo CSS del componente
})
export class HomeComponent implements OnInit, OnDestroy {

  // ──────────────────────────────────────────────
  // CATEGORÍAS
  // Lista de categorías que se muestran en la sección de colecciones.
  // Cada objeto tiene: nombre, cantidad de productos e ícono emoji.
  // ──────────────────────────────────────────────
  categories = [
    { name: 'HOODIES',    count: 24, icon: '🧥' },
    { name: 'CAMISETAS',  count: 36, icon: '👕' },
    { name: 'PANTALONES', count: 18, icon: '👖' },
    { name: 'ACCESORIOS', count: 12, icon: '🧢' },
  ];

  // ──────────────────────────────────────────────
  // FILTROS DE PRODUCTOS
  // Lista de botones que aparecen sobre la sección de productos.
  // 'activeFilter' guarda cuál filtro está seleccionado en este momento.
  // ──────────────────────────────────────────────
  filters: string[] = ['TODOS', 'HOODIES', 'CAMISETAS', 'ACCESORIOS'];
  activeFilter: string = 'TODOS'; // Por defecto se muestran todos los productos

  // ──────────────────────────────────────────────
  // LISTA DE PRODUCTOS
  // Todos los productos de la tienda con sus datos:
  // nombre, precio, precio anterior (si hay descuento), ícono, badge y categoría.
  // ──────────────────────────────────────────────
  allProducts = [
    { name: 'Shadow Hoodie',    price: '189.000', oldPrice: '220.000', icon: '🧥', badge: 'SALE',  category: 'HOODIES'    },
    { name: 'Street Tee Vol.3', price: '85.000',  oldPrice: null,      icon: '👕', badge: 'NUEVO', category: 'CAMISETAS'  },
    { name: 'Urban Zip Hoodie', price: '210.000', oldPrice: null,      icon: '🧥', badge: null,    category: 'HOODIES'    },
    { name: 'SW Cap Black',     price: '65.000',  oldPrice: null,      icon: '🧢', badge: 'HOT',   category: 'ACCESORIOS' },
    { name: 'Grunge Tee',       price: '79.000',  oldPrice: '95.000',  icon: '👕', badge: 'SALE',  category: 'CAMISETAS'  },
    { name: 'Cargo Fleece',     price: '195.000', oldPrice: null,      icon: '🧥', badge: 'NUEVO', category: 'HOODIES'    },
  ];

  // 'filteredProducts' es la lista que se muestra en pantalla.
  // Al inicio muestra todos, luego cambia según el filtro activo.
  filteredProducts = [...this.allProducts];

  // ──────────────────────────────────────────────
  // FUNCIÓN FILTRAR PRODUCTOS
  // Se ejecuta cuando el usuario hace clic en un botón de filtro.
  // Si elige 'TODOS' muestra todo, si no, filtra por categoría.
  // ──────────────────────────────────────────────
  setFilter(filter: string): void {
    this.activeFilter = filter; // Actualiza el filtro activo (resalta el botón)
    this.filteredProducts = filter === 'TODOS'
      ? [...this.allProducts]                              // Muestra todos
      : this.allProducts.filter(p => p.category === filter); // Filtra por categoría
  }

  // ──────────────────────────────────────────────
  // COUNTDOWN — Contador regresivo para el próximo Drop
  // Muestra días, horas, minutos y segundos restantes.
  // Se actualiza cada segundo en tiempo real.
  // ──────────────────────────────────────────────
  countdown = [
    { value: '05', label: 'DÍAS' },
    { value: '12', label: 'HORAS' },
    { value: '38', label: 'MIN' },
    { value: '00', label: 'SEG' },
  ];

  // Variable privada para guardar el intervalo y poder cancelarlo después
  private countdownInterval: any;

  // ──────────────────────────────────────────────
  // ngOnInit — Se ejecuta cuando el componente carga en pantalla
  // Aquí iniciamos el countdown calculando la diferencia entre
  // la fecha actual y la fecha objetivo del drop (5 días + 12 horas).
  // ──────────────────────────────────────────────
  ngOnInit(): void {
    // Calculamos la fecha objetivo del drop
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);   // 5 días adelante
    targetDate.setHours(targetDate.getHours() + 12); // 12 horas más

    // setInterval ejecuta esta función cada 1000ms (1 segundo)
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now; // Milisegundos restantes

      // Si el tiempo llegó a 0, detenemos el contador
      if (distance <= 0) {
        clearInterval(this.countdownInterval);
        return;
      }

      // Convertimos los milisegundos a días, horas, minutos y segundos
      const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizamos el array countdown con los nuevos valores
      // padStart(2, '0') asegura que siempre muestre 2 dígitos (ej: '05' en vez de '5')
      this.countdown = [
        { value: String(days).padStart(2, '0'),    label: 'DÍAS' },
        { value: String(hours).padStart(2, '0'),   label: 'HORAS' },
        { value: String(minutes).padStart(2, '0'), label: 'MIN' },
        { value: String(seconds).padStart(2, '0'), label: 'SEG' },
      ];
    }, 1000); // Se repite cada 1 segundo
  }

  // ──────────────────────────────────────────────
  // ngOnDestroy — Se ejecuta cuando el componente se destruye (el usuario navega a otra página)
  // Es importante cancelar el intervalo para evitar memory leaks (fugas de memoria).
  // ──────────────────────────────────────────────
  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval); // Cancela el setInterval
    }
  }
}