import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';

@Component({
  selector: 'app-card-carro',
  templateUrl: './card-carro.component.html',
  styleUrls: ['./card-carro.component.scss'],
})
export class CardCarroComponent {
  @Input() car: Car = {} as Car;

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page], {
      state: { car: this.car },
    });
  }
}
