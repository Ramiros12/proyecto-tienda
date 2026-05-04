import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionesPage } from './colecciones-page';

describe('ColeccionesPage', () => {
  let component: ColeccionesPage;
  let fixture: ComponentFixture<ColeccionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColeccionesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ColeccionesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
