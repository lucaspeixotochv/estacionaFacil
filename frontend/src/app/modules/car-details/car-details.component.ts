import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car: Car = {} as Car;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.car = history.state.car;
  }

  alugarCarro(): void {
    //Verificar se está logado
    console.log('Carro alugado:', this.car.name);
    this.router.navigate(['/payment'], {
      state: { car: this.car },
    });
  }
}
