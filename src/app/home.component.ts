import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // CARRUSEL
  currentSlide: number = 0;
  totalSlides: number = 3;
  progressWidth: number = 0;
  private slideInterval: any;
  private progressInterval: any;
  private progressValue: number = 0;


  // CATEGORÍAS — con URLs de imágenes (Unsplash)
  categories = [
  {
  name: 'HOODIES',
  count: 24,
  image: 'https://tse1.mm.bing.net/th/id/OIP.uMDGt-svSzzkq-3xS61F9gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
},
    {
      name: 'CAMISETAS',
      count: 36,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'
    },
    {
      name: 'PANTALONES',
      count: 18,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80'
    },
    {
      name: 'ACCESORIOS',
      count: 12,
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80'
    },
  ];


  // FILTROS
  filters: string[] = ['TODOS', 'HOODIES', 'CAMISETAS', 'ACCESORIOS'];
  activeFilter: string = 'TODOS';


  // PRODUCTOS — con URLs de imágenes (Unsplash)
  allProducts = [
    {
      name: 'Shadow Hoodie',
      price: '189.000', oldPrice: '220.000',
      image: 'https://tse3.mm.bing.net/th/id/OIP.JUZ1cyYHdLYOlUTyziLuJAHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      badge: 'SALE', category: 'HOODIES'
    },
    {
      name: 'Street Tee Vol.3',
      price: '85.000', oldPrice: null,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
      badge: 'NUEVO', category: 'CAMISETAS'
    },
    {
      name: 'Urban Zip Hoodie',
      price: '210.000', oldPrice: null,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
      badge: null, category: 'HOODIES'
    },
    {
      name: 'SW Cap Black',
      price: '65.000', oldPrice: null,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80',
      badge: 'HOT', category: 'ACCESORIOS'
    },
    {
      name: 'Grunge Tee',
      price: '79.000', oldPrice: '95.000',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
      badge: 'SALE', category: 'CAMISETAS'
    },
    {
      name: 'Cargo Fleece',
      price: '195.000', oldPrice: null,
      image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80',
      badge: 'NUEVO', category: 'HOODIES'
    },
  ];

  filteredProducts = [...this.allProducts];


  // FILTRAR PRODUCTOS
  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filteredProducts = filter === 'TODOS'
      ? [...this.allProducts]
      : this.allProducts.filter(p => p.category === filter);
  }


  // COUNTDOWN
  countdown = [
    { value: '05', label: 'DÍAS' },
    { value: '12', label: 'HORAS' },
    { value: '38', label: 'MIN' },
    { value: '00', label: 'SEG' },
  ];

  private countdownInterval: any;


  // MÉTODOS DEL CARRUSEL

  /** Avanza al siguiente slide */
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
    this.resetProgress();
  }

  /** Retrocede al slide anterior */
  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
    this.resetProgress();
  }

  /** Va directo a un slide específico */
  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateCarousel();
    this.resetProgress();
  }

  /** Actualiza clases active en slides y dots del DOM */
  private updateCarousel(): void {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === this.currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSlide);
    });
  }

  /** Reinicia la barra de progreso */
  private resetProgress(): void {
    this.progressValue = 0;
    this.progressWidth = 0;
    clearInterval(this.progressInterval);
    this.startProgress();
  }

  /** Inicia la animación de la barra de progreso */
  private startProgress(): void {
    this.progressInterval = setInterval(() => {
      this.progressValue += 1;
      this.progressWidth = this.progressValue;
      if (this.progressValue >= 100) {
        this.progressValue = 0;
      }
    }, 50); // 50ms * 100 = 5s por slide
  }

  /** Auto-avance del carrusel cada 5 segundos */
  private startAutoPlay(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }


  // ngOnInit
  ngOnInit(): void {
    // Iniciar carrusel automático
    this.startAutoPlay();
    this.startProgress();

    // Countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(targetDate.getHours() + 12);

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(this.countdownInterval);
        return;
      }

      const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = [
        { value: String(days).padStart(2, '0'),    label: 'DÍAS' },
        { value: String(hours).padStart(2, '0'),   label: 'HORAS' },
        { value: String(minutes).padStart(2, '0'), label: 'MIN' },
        { value: String(seconds).padStart(2, '0'), label: 'SEG' },
      ];
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.slideInterval)     clearInterval(this.slideInterval);
    if (this.progressInterval)  clearInterval(this.progressInterval);
  }
}