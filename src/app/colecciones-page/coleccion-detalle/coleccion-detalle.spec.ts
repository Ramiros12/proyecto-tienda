import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionDetalle } from './coleccion-detalle';

describe('ColeccionDetalle', () => {
  let component: ColeccionDetalle;
  let fixture: ComponentFixture<ColeccionDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColeccionDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ColeccionDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
