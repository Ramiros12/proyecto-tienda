import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nosotros-page.html',
  styleUrls: ['./nosotros-page.css']
})
export class NosotrosPage {
  pageTitle: string = 'NOSOTROS';
  prevRoute: string = '/nosotros'; // La página anterior en el ciclo
  nextRoute: string = '/colecciones'; // La página siguiente
}