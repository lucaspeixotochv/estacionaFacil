import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarroComponent } from './card-carro.component';

describe('CardCarroComponent', () => {
  let component: CardCarroComponent;
  let fixture: ComponentFixture<CardCarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarroComponent]
    });
    fixture = TestBed.createComponent(CardCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
