import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformationsComponent } from './edit-informations.component';

describe('EditInformationsComponent', () => {
  let component: EditInformationsComponent;
  let fixture: ComponentFixture<EditInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInformationsComponent]
    });
    fixture = TestBed.createComponent(EditInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
