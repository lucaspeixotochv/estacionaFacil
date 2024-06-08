import { Component, Input } from '@angular/core';
import { ICar } from './@types/car.type';

@Component({
  selector: 'app-card-carro',
  templateUrl: './card-carro.component.html',
  styleUrls: ['./card-carro.component.scss'],
})
export class CardCarroComponent {
  @Input() car: ICar = {} as ICar;
}
