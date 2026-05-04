import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio-page.html',
  styleUrls: ['./inicio-page.css']
})
export class InicioPage {
  pageTitle: string = 'INICIO';
  prevRoute: string = '/nosotros'; // La página anterior en el ciclo
  nextRoute: string = '/colecciones'; // La página siguiente
}
