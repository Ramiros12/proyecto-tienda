import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InicioPage } from './inicio-page/inicio-page';
import { ColeccionesPage } from './colecciones-page/colecciones-page';
import { DropsPage } from './drops-page/drops-page';
import { NosotrosPage } from './nosotros-page/nosotros-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },         // Pantalla principal actual
  { path: 'inicio', component: InicioPage }, // La "pantalla nueva"
  { path: 'colecciones', component: ColeccionesPage},
  { path: 'drops', component: DropsPage },
  { path: 'nosotros', component: NosotrosPage }
]