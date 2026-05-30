import { Component, inject, OnInit } from '@angular/core'; // <-- Agregamos inject y OnInit
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './nosotros-page.html',
  styleUrls: ['./nosotros-page.css']
})
export class NosotrosPage implements OnInit { 
  pageTitle: string = 'NOSOTROS';
  prevRoute: string = '/nosotros';
  nextRoute: string = '/colecciones';

  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  perfil$: Observable<any> | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const documentoRef = doc(this.firestore, `equipo/${id}`);
      
      this.perfil$ = docData(documentoRef);
    }
  }
}