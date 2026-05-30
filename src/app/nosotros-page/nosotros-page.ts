import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nosotros-page.html',
  styleUrls: ['./nosotros-page.css']
})
export class NosotrosPage {
  pageTitle: string = 'NOSOTROS';
  prevRoute: string = '/drops';
  nextRoute: string = '/colecciones';

  comentario = { nombre: '', email: '', mensaje: '' };
  enviado = false;

  enviarComentario() {
    if (this.comentario.nombre && this.comentario.mensaje) {
      this.enviado = true;
      setTimeout(() => {
        this.enviado = false;
        this.comentario = { nombre: '', email: '', mensaje: '' };
      }, 3000);
    }
  }
}