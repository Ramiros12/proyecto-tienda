import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDetalleComponent } from './drop-detalle';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('DropDetalleComponent', () => {
  let component: DropDetalleComponent;
  let fixture: ComponentFixture<DropDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDetalleComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(DropDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});