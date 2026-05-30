import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-drops-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './drops-page.html',
  styleUrls: ['./drops-page.css']
})
export class DropsPage {
  pageTitle: string = 'DROPS';
  prevRoute: string = '/colecciones';
  nextRoute: string = '/nosotros';
}