import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-coleccion-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coleccion-detalle.html',
  styleUrls: ['./coleccion-detalle.css']
})
export class ColeccionDetalleComponent {

  agregado: string = '';

  constructor(private carritoService: CarritoService) {}

  get totalCarrito() {
    return this.carritoService.cantidadTotal();
  }

  agregarAlCarrito(prod: any) {
    this.carritoService.agregar({
      nombre: prod.nombre,
      precio: prod.precio,
      imagen: prod.imagen,
      categoria: 'Estilo Urbano',
      cantidad: 1
    });
    this.agregado = prod.nombre;
    setTimeout(() => this.agregado = '', 2000);
  }

  categorias = [
    {
      nombre: 'CAMISETAS',
      color: 'cyan',
      productos: [
        { nombre: 'Tee Oversize Shadow', precio: '$89.900', imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80', badge: 'NEW' },
        { nombre: 'Tee Graphic Street', precio: '$75.000', imagen: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80', badge: '' },
        { nombre: 'Tee Drop 001', precio: '$95.000', imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', badge: 'HOT' },
        { nombre: 'Tee Urban Basic', precio: '$65.000', imagen: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80', badge: '' },
      ]
    },
    {
      nombre: 'PANTALONES',
      color: 'yellow',
      productos: [
        { nombre: 'Cargo Street Negro', precio: '$145.000', imagen: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', badge: 'NEW' },
        { nombre: 'Jogger Urban SS25', precio: '$120.000', imagen: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', badge: '' },
        { nombre: 'Baggy Shadow Dark', precio: '$155.000', imagen: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80', badge: 'LIMITED' },
        { nombre: 'Slim Street Fit', precio: '$110.000', imagen: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80', badge: '' },
      ]
    },
    {
      nombre: 'ZAPATOS',
      color: 'white',
      productos: [
        { nombre: 'Sneaker Urban Low', precio: '$220.000', imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', badge: 'HOT' },
        { nombre: 'Boot Street Dark', precio: '$280.000', imagen: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80', badge: '' },
        { nombre: 'Chunky Shadow 01', precio: '$260.000', imagen: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80', badge: 'NEW' },
        { nombre: 'Classic Street Hi', precio: '$195.000', imagen: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80', badge: '' },
      ]
    },
    {
      nombre: 'ACCESORIOS',
      color: 'orange',
      productos: [
        { nombre: 'Gorra Snapback SW', precio: '$55.000', imagen: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80', badge: 'NEW' },
        { nombre: 'Gorro Beanie Dark', precio: '$45.000', imagen: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80', badge: '' },
        { nombre: 'Bag Crossbody Urban', precio: '$89.000', imagen: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', badge: 'HOT' },
        { nombre: 'Chain Street Gold', precio: '$35.000', imagen: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', badge: '' },
      ]
    }
  ];
}