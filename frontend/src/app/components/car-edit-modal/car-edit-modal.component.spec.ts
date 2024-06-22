import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditModalComponent } from './car-edit-modal.component';

describe('CarEditModalComponent', () => {
  let component: CarEditModalComponent;
  let fixture: ComponentFixture<CarEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarEditModalComponent]
    });
    fixture = TestBed.createComponent(CarEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
