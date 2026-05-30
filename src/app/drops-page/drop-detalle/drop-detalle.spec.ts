import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDetalle } from './drop-detalle';

describe('DropDetalle', () => {
  let component: DropDetalle;
  let fixture: ComponentFixture<DropDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(DropDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
