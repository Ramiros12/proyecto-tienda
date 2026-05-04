import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // <--- Importante
import { HomeComponent } from './home.component'; // <--- Importante

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent], // <--- Agrégalos aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'proyecto-tienda';
}