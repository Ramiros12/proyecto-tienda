import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ColeccionesPage } from './colecciones-page/colecciones-page';
import { DropsPage } from './drops-page/drops-page';
import { NosotrosPage } from './nosotros-page/nosotros-page';
import { ColeccionDetalleComponent } from './colecciones-page/coleccion-detalle/coleccion-detalle';
import { ColeccionAnterioresComponent } from './colecciones-page/coleccion-anteriores/coleccion-anteriores';
import { DropDetalleComponent } from './drops-page/drop-detalle/drop-detalle';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colecciones', component: ColeccionesPage },
  { path: 'colecciones/estilo-urbano', component: ColeccionDetalleComponent },
  { path: 'colecciones/colecciones-anteriores', component: ColeccionAnterioresComponent },
  { path: 'drops', component: DropsPage },
  { path: 'drops/:id', component: DropDetalleComponent },
  { path: 'nosotros/:id', component: NosotrosPage }
];