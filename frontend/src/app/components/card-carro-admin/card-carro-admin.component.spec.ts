import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarroAdminComponent } from './card-carro-admin.component';

describe('CardCarroAdminComponent', () => {
  let component: CardCarroAdminComponent;
  let fixture: ComponentFixture<CardCarroAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarroAdminComponent]
    });
    fixture = TestBed.createComponent(CardCarroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
