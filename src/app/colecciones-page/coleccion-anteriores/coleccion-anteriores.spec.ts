import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionAnteriores } from './coleccion-anteriores';

describe('ColeccionAnteriores', () => {
  let component: ColeccionAnteriores;
  let fixture: ComponentFixture<ColeccionAnteriores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColeccionAnteriores],
    }).compileComponents();

    fixture = TestBed.createComponent(ColeccionAnteriores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
