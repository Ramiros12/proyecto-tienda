import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drops-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drops-page.html',
  styleUrls: ['./drops-page.css']
})
export class DropsPage {
  pageTitle: string = 'DROPS';
  prevRoute: string = '/nosotros'; // La página anterior en el ciclo
  nextRoute: string = '/colecciones'; // La página siguiente
}