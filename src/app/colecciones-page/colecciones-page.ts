import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-colecciones-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './colecciones-page.html',
  styleUrls: ['./colecciones-page.css']
})
export class ColeccionesPage {
  pageTitle: string = 'COLECCIONES';
  prevRoute: string = '/nosotros';
  nextRoute: string = '/drops';

  drops = [
    { nombre: 'DROP 001 — SHADOW', year: '2024', color: '#00f2ff' },
    { nombre: 'DROP 002 — FUEGO',  year: '2024', color: '#fbff00' },
    { nombre: 'DROP 003 — CONCRETE', year: '2024', color: '#ffffff' },
    { nombre: 'DROP 004 — NEON',   year: '2024', color: '#ff6b35' },
  ];
}