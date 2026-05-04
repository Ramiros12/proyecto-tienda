import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-colecciones-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colecciones-page.html',
  styleUrls: ['./colecciones-page.css']
})
export class ColeccionesPage {
  pageTitle: string = 'COLEECIONES';
  prevRoute: string = '/nosotros'; // La página anterior en el ciclo
  nextRoute: string = '/colecciones'; // La página siguiente
}
