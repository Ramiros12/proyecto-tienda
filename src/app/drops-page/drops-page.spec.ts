import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropsPage } from './drops-page';

describe('DropsPage', () => {
  let component: DropsPage;
  let fixture: ComponentFixture<DropsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DropsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
