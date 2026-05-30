import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColeccionDetalleComponent } from './coleccion-detalle';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('ColeccionDetalleComponent', () => {
  let component: ColeccionDetalleComponent;
  let fixture: ComponentFixture<ColeccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColeccionDetalleComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(ColeccionDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});