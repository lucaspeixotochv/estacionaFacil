import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateModalComponent } from './car-create-modal.component';

describe('CarCreateModalComponent', () => {
  let component: CarCreateModalComponent;
  let fixture: ComponentFixture<CarCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCreateModalComponent]
    });
    fixture = TestBed.createComponent(CarCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
