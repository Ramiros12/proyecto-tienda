import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coleccion-anteriores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coleccion-anteriores.html',
  styleUrls: ['./coleccion-anteriores.css']
})
export class ColeccionAnterioresComponent {

  slideActivo = 0;

  conjuntos = [
    {
      id: 0,
      nombre: 'DROP 001 — MONO-COLOR',
      temporada: 'VERANO 2024',
      descripcion: 'Paleta oscura, siluetas oversized. La colección que definió nuestra identidad.',
      color: 'cyan',
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
      prendas: ['Hoodie Negro Oversized', 'Cargo Gris Oscuro', 'Sneaker Low Dark', 'Gorra Snapback SW']
    },
    {
      id: 1,
      nombre: 'DROP 002 — ESTILO PROPIO',
      temporada: 'INVIERNO 2024',
      descripcion: 'Colores encendidos sobre bases neutras. Energía callejera al máximo.',
      color: 'yellow',
      imagen: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1200&q=80',
      prendas: ['Tee Graphic Rojo', 'Jogger Beige Urban', 'Chunky Blanco', 'Cadena Gold SW']
    },
    {
      id: 2,
      nombre: 'DROP 003 — CONCRETE',
      temporada: 'OTOÑO 2024',
      descripcion: 'Inspirado en el cemento y la arquitectura urbana. Gris es el nuevo negro.',
      color: 'white',
      imagen: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      prendas: ['Tee Oversize Gris', 'Baggy Cement', 'Boot Street Hi', 'Beanie Dark']
    },
    {
      id: 3,
      nombre: 'DROP 004 — FRESCO',
      temporada: 'PRIMAVERA 2024',
      descripcion: 'El día como lienzo. Colores vivos que brillan en incluso a la luz del día.',
      color: 'orange',
      imagen: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
      prendas: ['Tee Neon Detail', 'Cargo Negro Neon', 'Sneaker Urban Hi', 'Cap Reflective']
    }
  ];

  irA(index: number) {
    this.slideActivo = index;
  }

  siguiente() {
    this.slideActivo = (this.slideActivo + 1) % this.conjuntos.length;
  }

  anterior() {
    this.slideActivo = (this.slideActivo - 1 + this.conjuntos.length) % this.conjuntos.length;
  }
}